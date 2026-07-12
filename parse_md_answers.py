import re
import pathlib

path = pathlib.Path('疾病1_1回目/疾病1_1回目.md')
text = path.read_text(encoding='utf-8')
parts = re.split(r'^##\s+問題(\d+)[^\n]*', text, flags=re.M)
answers = {}
for i in range(1, len(parts), 2):
    num = int(parts[i])
    content = parts[i + 1]
    m = re.search(r'回答[：:\s]+([0-9、,]+)', content)
    if m:
        values = re.findall(r'[0-9]+', m.group(1))
        answers[num] = [f'opt{v}' for v in values]
    else:
        answers[num] = []
for k in sorted(answers):
    print(f'{k}: {answers[k]}')
print('MISSING', [k for k, v in answers.items() if not v])
print('TOTAL', len(answers))
