from pathlib import Path
import re
import shutil

root = Path(r"c:\vscode作成\Practice-problem")
source_dir = root / "疾病1_1回目"
mother_dir = root / "母性"
mother_dir.mkdir(exist_ok=True)

for name in ["answer.js", "shippei1.js"]:
    src = source_dir / name
    if src.exists():
        shutil.copy2(src, mother_dir / name)

md_path = mother_dir / "母性.md"
text = md_path.read_text(encoding="utf-8")
blocks = re.split(r"\n*ーーーーーーーーーーーーーーーーーー\n*", text)

name_map = {
    1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
    11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen",
    19: "nineteen", 20: "twenty", 21: "twentyone", 22: "twentytwo", 23: "twentythree",
}

for block in blocks:
    block = block.strip()
    if not block:
        continue

    match = re.match(r"##\s*問題\s*(\d+)", block)
    if not match:
        continue
    num = int(match.group(1))
    if num not in name_map:
        continue

    after_heading = block[match.end():].strip()
    answer_match = re.search(r"\*\*回答番号：\s*(\d+)\*\*", after_heading)
    if answer_match is None:
        answer_match = re.search(r"\*\*回答番号：\s*(\d+)\*\*", block)
    if answer_match is None:
        continue
    answer_num = int(answer_match.group(1))

    question_lines = []
    option_lines = {}
    question_candidates = after_heading[:answer_match.start()].splitlines()
    for line in question_candidates:
        s = line.strip()
        if not s:
            continue
        m = re.match(r"^(\d+)\.\s*(.*)$", s)
        if m:
            option_lines[int(m.group(1))] = m.group(2).strip()
        else:
            question_lines.append(s)

    if not question_lines and not option_lines:
        question_lines = ["問題"]

    question_text = " ".join(question_lines).strip()
    if not question_text:
        question_text = "問題"

    expl_section = block.split("**選択肢の解説**", 1)
    explanation_map = {}
    if len(expl_section) > 1:
        for line in expl_section[1].splitlines():
            s = line.strip()
            if not s:
                continue
            m = re.match(r"^(\d+)\.\s*(.*)$", s)
            if m:
                key = int(m.group(1))
                val = m.group(2).strip()
                # remove "opt" prefixes used in some generated texts
                val = re.sub(r"\bopt(?=\d+\b)", "", val)
                explanation_map[key] = val

    # Keep only the content that matches the ideal one.html style.
    answer_explanation = explanation_map.get(answer_num, "正解です。")
    answer_explanation = answer_explanation.strip()

    reason_lines = []
    for i in range(1, 5):
        if i == answer_num:
            continue
        if i in explanation_map:
            text = explanation_map[i]
        else:
            text = "該当しないため、他の選択肢を確認する。"
        text = text.strip()
        reason_lines.append(f'        <li><strong>{i}</strong>: {text}</li>')

    for i in range(1, 5):
        if i not in option_lines:
            option_lines[i] = ""

    html_lines = [
        "<!DOCTYPE html>",
        "<html lang=\"ja\">",
        "<head>",
        "  <meta charset=\"UTF-8\">",
        "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">",
        "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        f"  <title>母性 {num}</title>",
        "  <link rel=\"stylesheet\" href=\"../style.css\">",
        "  <link rel=\"stylesheet\" href=\"../page_move/page_move.css\">",
        "</head>",
        "<body>",
        "<div class=\"LineUp\">",
        f"  問題 <span id=\"problemNumber\" value=\"{num}\"></span>",
        "  <input type=\"button\" value=\"答え\" onclick=\"showAnswer()\">",
        "</div>",
        "",
        "<div class=\"box\">",
        f"  {question_text}",
        "</div>",
        "",
        "<div id=\"correctMark\">正解！</div>",
        "",
        "<ol>",
    ]

    for i in range(1, 5):
        text_value = option_lines[i]
        html_lines.append(f'  <li><input type="checkbox" name="checkbox" id="{i}" value="opt{i}"/>{text_value}</li>')

    html_lines.extend([
        "</ol>",
        "",
        "<div class=\"button\">",
        "  <input type=\"button\" id=\"back\" value=\"戻る\" onclick=\"goBack(this)\">",
        "  <input type=\"button\" id=\"answerBtn\" value=\"OK\" onclick=\"oK()\">",
        "  <input type=\"button\" id=\"next\" value=\"次へ\" onclick=\"goNext(this)\">",
        "</div>",
        "",
        "<br/>",
        "<div id=\"modal1\" style=\"display: none;\">",
        "  <details>",
        "    <summary>【答え】</summary>",
        f"    <div>{answer_num}</div>",
        "  </details><br/>",
        "",
        "  <details>",
        "    <summary>【答えの解説】</summary>",
        f"    <div>{answer_explanation}</div>",
        "  </details><br/>",
        "",
        "  <details>",
        "    <summary>【選択肢の解説】</summary>",
        "      <ul>",
        *reason_lines,
        "      </ul>",
        "  </details>",
        "",
        "  <br />",
        "  <input type=\"button\" class=\"close\" value=\"とじる\" onclick=\"closeModal()\">",
        "</div>",
        "",
        "<div id=\"pageMove\"></div>",
        "",
        "<script src=\"shippei1.js\"></script>",
        "<script src=\"answer.js\"></script>",
        "<script src=\"../page_move/page_move.js\"></script>",
        "</body>",
        "</html>",
        "",
    ])

    output_path = mother_dir / f"{name_map[num]}.html"
    output_path.write_text("\n".join(html_lines), encoding="utf-8")

print(f"generated {len(list(mother_dir.glob('*.html')))} html files in {mother_dir}")
