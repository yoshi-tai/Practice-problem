import html
import re
from pathlib import Path
from typing import Dict, List, Tuple

ROOT = Path(__file__).resolve().parent
WORD_NAMES = [None, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyone", "twentytwo", "twentythree", "twentyfour", "twentyfive", "twentysix", "twentyseven", "twentyeight", "twentynine", "thirty", "thirtyone", "thirtytwo", "thirtythree", "thirtyfour", "thirtyfive", "thirtysix", "thirtyseven", "thirtyeight", "thirtynine", "forty", "fortyone", "fortytwo", "fortythree", "fortyfour", "fortyfive", "fortysix", "fortyseven", "fortyeight", "fortynine", "fifty", "fiftyone", "fiftytwo", "fiftythree", "fiftyfour", "fiftyfive", "fiftysix", "fiftyseven", "fiftyeight"]


def normalize_number(value: str) -> int:
    table = str.maketrans("０-９", "0-9")
    return int(str(value).translate(table))


def parse_markdown_answers(markdown_text: str) -> Dict[int, List[str]]:
    answers: Dict[int, List[str]] = {}
    for section in re.split(r'(?m)^##\s+', markdown_text)[1:]:
        heading, _, body = section.partition('\n')
        if not heading.strip():
            continue
        if not re.match(r'^問題', heading):
            continue
        match = re.search(r'(\d+)', heading)
        if not match:
            continue
        num = normalize_number(match.group(1))
        answer_match = re.search(r'回答[：:\s]+([0-9、,０-９]+)', body)
        values = []
        if answer_match:
            values = [f'opt{normalize_number(v)}' for v in re.findall(r'\d+', answer_match.group(1))]
        answers[num] = values
    return answers


def parse_markdown_problems(markdown_text: str) -> List[Dict[str, object]]:
    problems: List[Dict[str, object]] = []
    for section in re.split(r'(?m)^##\s+', markdown_text)[1:]:
        heading, _, body = section.partition('\n')
        if not heading.strip():
            continue
        if not re.match(r'^問題', heading):
            continue

        match = re.search(r'(\d+)', heading)
        if not match:
            continue
        number = normalize_number(match.group(1))
        question_text = re.sub(r'^(?:問題|補足問題|演習)\s*\d+', '', heading).strip()
        question_text = re.sub(r'^　+', '', question_text)
        if not question_text:
            question_text = '問題'

        answer_match = re.search(r'回答[：:\s]+([0-9、,０-９]+)', body)
        answers: List[str] = []
        if answer_match:
            answers = [f'opt{normalize_number(v)}' for v in re.findall(r'\d+', answer_match.group(1))]

        explanation_parts = body.split('**解説**', 1)
        question_body = explanation_parts[0]
        explanation_body = explanation_parts[1] if len(explanation_parts) > 1 else ''

        raw_options = []
        for option_match in re.finditer(r'^\s*([0-9]+)\.\s*(.+)$', question_body, flags=re.M):
            raw_options.append((normalize_number(option_match.group(1)), option_match.group(2).strip()))

        answer_explanation_lines: List[str] = []
        option_explanations: List[Tuple[str, str]] = []
        if explanation_body:
            for line in explanation_body.splitlines():
                line = line.strip()
                if not line or line == '---':
                    continue
                option_line = re.match(r'^([0-9]+)[．.]\s*(.+)$', line)
                if option_line:
                    option_id = f"opt{normalize_number(option_line.group(1))}"
                    explanation_text = option_line.group(2).strip()
                    if option_id in answers:
                        answer_explanation_lines.append(explanation_text)
                    else:
                        option_explanations.append((option_id, explanation_text))

        if not answer_explanation_lines:
            answer_explanation_lines.append('解説はありません。')

        problems.append({
            'number': number,
            'question_text': question_text,
            'answers': answers,
            'options': raw_options,
            'answer_explanation_lines': answer_explanation_lines,
            'option_explanations': option_explanations,
        })

    return problems


def parse_small_child_problems(markdown_text: str) -> List[Dict[str, object]]:
    problems: List[Dict[str, object]] = []
    blocks = re.split(r'(?m)^回答番号', markdown_text)
    if len(blocks) <= 1:
        return problems

    for index, block in enumerate(blocks[1:], start=1):
        if not block.strip():
            continue
        lines = [line.rstrip() for line in block.splitlines() if line.strip()]
        if not lines:
            continue

        answer_lines = []
        option_lines = []
        explanation_lines = []
        question_text = ''

        for line in lines:
            stripped = line.strip()
            if not stripped:
                continue
            if not question_text:
                question_text = stripped
                continue
            if re.match(r'^([0-9]+)\.', stripped):
                option_match = re.match(r'^([0-9]+)\.\s*(.+)$', stripped)
                if option_match:
                    option_lines.append((normalize_number(option_match.group(1)), option_match.group(2).strip()))
                continue
            if re.match(r'^[0-9]+[．.]\s*', stripped):
                explanation_lines.append(stripped)
                continue
            if re.match(r'^回答番号', stripped):
                continue
            explanation_lines.append(stripped)

        answer_match = re.search(r'([0-9、,０-９]+)', question_text)
        answers: List[str] = []
        if answer_match:
            answers = [f'opt{normalize_number(v)}' for v in re.findall(r'\d+', answer_match.group(1))]

        problems.append({
            'number': index,
            'question_text': question_text,
            'answers': answers,
            'options': option_lines,
            'answer_explanation_lines': explanation_lines or ['解説はありません。'],
            'option_explanations': [],
        })

    return problems


def render_page(problem: Dict[str, object], folder_name: str) -> str:
    number = problem['number']
    question_text = html.escape(str(problem['question_text']))
    options = problem['options']
    answers = problem['answers']
    answer_explanation_lines = problem['answer_explanation_lines']
    option_explanations = problem['option_explanations']

    option_html = []
    for option_number, option_text in options:
        input_id = f"opt{option_number}"
        option_html.append(
            f'<li><input type="checkbox" name="checkbox" id="{input_id}" value="{input_id}"/>{html.escape(option_text)}</li>'
        )

    explanation_html = ''
    if option_explanations:
        explanation_items = ''.join(
            f'<li><strong>{html.escape(item[0])}</strong>: {html.escape(item[1])}</li>'
            for item in option_explanations
        )
        explanation_html = f'<ul>{explanation_items}</ul>'

    answer_explanation_html = '<br/>'.join(html.escape(text) for text in answer_explanation_lines)
    answer_text = ', '.join(answer.replace('opt', '') for answer in answers) if answers else '未設定'
    return f'''<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{folder_name} {number}</title>
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="../page_move/page_move.css">
</head>
<body>
<div class="LineUp">
  問題 <span id="problemNumber" value="{number}"></span>
  <input type="button" value="答え" onclick="showAnswer()">
</div>

<div class="box">
  {question_text}
</div>

<div id="correctMark">正解！</div>

<ol>
  {''.join(option_html)}
</ol>

<div class="button">
  <input type="button" id="back" value="戻る" onclick="goBack(this)">
  <input type="button" id="answerBtn" value="OK" onclick="oK()">
  <input type="button" id="next" value="次へ" onclick="goNext(this)">
</div>

<br/>
<div id="modal1" style="display: none;">
  <details>
    <summary>【答え】</summary>
    <div>{answer_text}</div>
  </details><br/>

  <details>
    <summary>【答えの解説】</summary>
    <div>{answer_explanation_html}</div>
  </details><br/>

  <details>
    <summary>【選択肢の解説】</summary>
    <div>{explanation_html}</div>
  </details>

  <br />
  <input type="button" class="close" value="とじる" onclick="closeModal()">
</div>

<div id="pageMove"></div>

<script src="shippei1.js"></script>
<script src="answer.js"></script>
<script src="../page_move/page_move.js"></script>
</body>
</html>
'''


def render_answer_js(problems: List[Dict[str, object]]) -> str:
    entries = []
    for problem in problems:
        number = problem['number']
        answers = problem['answers']
        entries.append(f"  {number}: {{ correct: {answers} }},")
    return f'''// generated by generate_problems_js.py
const problems = {{
{chr(10).join(entries)}
}};

/* 問題番号を表示する関数 */
function setProblemNumber() {{
  const problemNumber = document.getElementById("problemNumber").getAttribute("value");
  document.getElementById("problemNumber").textContent = problemNumber;
}}

window.onload = function () {{
  setProblemNumber();
}};

/* 正解判定と表示 */
function oK() {{
  const problemNumber = Number(document.getElementById("problemNumber").getAttribute("value"));
  const problem = problems[problemNumber];
  const selected = Array.from(document.querySelectorAll('input[name="checkbox"]:checked, input[name="radio"]:checked')).map(item => item.value);

  if (selected.length === 0) {{
    alert("答えを選択してね！");
    return;
  }}

  if (problem.correct.length === selected.length && problem.correct.every(value => selected.includes(value))) {{
    const mark = document.getElementById("correctMark");
    mark.classList.remove("show");
    setTimeout(function () {{
      mark.classList.add("show");
    }}, 10);
    setTimeout(function () {{
      mark.classList.remove("show");
    }}, 30000);
    return;
  }}

  if (problem.correct.some(value => selected.includes(value))) {{
    alert("一個あってる！もう一個選びなおしてね！");
  }} else {{
    alert("2つとも選びなおしてね！");
  }}
}}

/* 答えボタン押下時 */
function showAnswer() {{
  const result = confirm("答え見てみる？");
  if (result) {{
    document.getElementById("modal1").style.display = "block";
    openModal("OK");
  }} else {{
    alert("ファイト！");
    closeModal();
  }}
}}

/* モーダルを開く */
function openModal(num) {{
  if (num === "OK") {{
    const problemNumber = document.getElementById("problemNumber");
    answerText(problemNumber);
  }}
}}

/* モーダルを閉じる */
function closeModal() {{
  document.getElementById("modal1").style.display = "none";
}}
'''


def render_shippei_js(problem_count: int) -> str:
    names = [""]
    for index in range(1, problem_count + 1):
        if index < len(WORD_NAMES) and WORD_NAMES[index]:
            names.append(WORD_NAMES[index])
        else:
            names.append(f"p{index}")
    page_names_str = ', '.join(f'"{name}"' for name in names[1:])
    return f'''/* generated by generate_problems_js.py */
const pageNames = [
  null,
  {page_names_str}
];

window.customPageNames = (pageNames[0] === null) ? pageNames.slice(1) : pageNames;
window.customTotalPages = window.customPageNames.length;
window.pageBasePath = "";

function setProblemNumber() {{
  const problemNumber = document.getElementById("problemNumber").getAttribute("value");
  document.getElementById("problemNumber").textContent = problemNumber;
}}

window.onload = function () {{
  setProblemNumber();
}};

function goNext(btn) {{
  const problemNumber = Number(document.getElementById("problemNumber").getAttribute("value"));
  const nextNumber = Math.min(problemNumber + 1, window.customTotalPages);
  location.href = window.pageBasePath + window.customPageNames[nextNumber - 1] + ".html";
}}

function goBack(btn) {{
  const problemNumber = Number(document.getElementById("problemNumber").getAttribute("value"));
  if (problemNumber === 1) {{
    location.href = "../index.html";
    return;
  }}
  const prevNumber = Math.max(problemNumber - 1, 1);
  location.href = window.pageBasePath + window.customPageNames[prevNumber - 1] + ".html";
}}
'''


def generate_for_folder(folder: Path) -> None:
    markdown_path = folder / f"{folder.name}.md"
    if not markdown_path.exists():
        return

    markdown_text = markdown_path.read_text(encoding='utf-8')
    if folder.name != '小児_事後課題':
        return

    problems = parse_small_child_problems(markdown_text)
    if not problems:
        return

    for problem in problems:
        page_name = WORD_NAMES[problem['number']] if problem['number'] < len(WORD_NAMES) and WORD_NAMES[problem['number']] else f"p{problem['number']}"
        html_path = folder / f"{page_name}.html"
        html_path.write_text(render_page(problem, folder.name), encoding='utf-8')

    (folder / 'answer.js').write_text(render_answer_js(problems), encoding='utf-8')
    (folder / 'shippei1.js').write_text(render_shippei_js(len(problems)), encoding='utf-8')


def main() -> None:
    target = ROOT / '小児_事後課題'
    if target.exists():
        generate_for_folder(target)
    print('generated html quiz pages')


if __name__ == '__main__':
    main()
