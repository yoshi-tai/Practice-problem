import glob
import pathlib
import re

names = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
    'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'twentyone': 21, 'twentytwo': 22,
    'twentythree': 23, 'twentyfour': 24, 'twentyfive': 25, 'twentysix': 26, 'twentyseven': 27,
    'twentyeight': 28, 'twentynine': 29, 'thirty': 30, 'thirtyone': 31, 'thirtytwo': 32, 'thirtythree': 33,
    'thirtyfour': 34, 'thirtyfive': 35, 'thirtysix': 36, 'thirtyseven': 37, 'thirtyeight': 38, 'thirtynine': 39,
    'forty': 40, 'fortyone': 41, 'fortytwo': 42, 'fortythree': 43, 'fortyfour': 44, 'fortyfive': 45,
    'fortysix': 46, 'fortyseven': 47, 'fortyeight': 48, 'fortynine': 49, 'fifty': 50, 'fiftyone': 51,
    'fiftytwo': 52, 'fiftythree': 53, 'fiftyfour': 54, 'fiftyfive': 55, 'fiftysix': 56, 'fiftyseven': 57,
    'fiftyeight': 58,
}

answers = {}
for path in sorted(glob.glob('疾病1_1回目/*.html'), key=lambda x: (len(x), x)):
    text = pathlib.Path(path).read_text(encoding='utf-8')
    m = re.search(r'<span[^>]*id="problemNumber"[^>]*value="(\d+)"', text)
    if m:
        num = int(m.group(1))
    else:
        num = names.get(pathlib.Path(path).stem)
    if num is None:
        continue
    ans = None
    m = re.search(r'<details>\s*<summary>\s*【答え】\s*</summary>(.*?)</details>', text, re.S)
    if m:
        body = m.group(1)
        nums = re.findall(r'([0-9]+)', body)
        if nums:
            ans = [f'opt{n}' for n in nums]
        else:
            opts = re.findall(r'opt(\d+)', body)
            if opts:
                ans = [f'opt{n}' for n in opts]
    if ans is None:
        m2 = re.search(r'<div[^>]*class="answer"[^>]*>(.*?)</div>', text, re.S)
        if m2:
            body = m2.group(1)
            nums = re.findall(r'([0-9]+)', body)
            if nums:
                ans = [f'opt{n}' for n in nums]
    if ans is None:
        opts = [m.group(1) for m in re.finditer(r'value="(opt\d+)"[^>]*checked', text)]
        if opts:
            ans = opts
    answers[num] = ans or []

for num in sorted(answers):
    print(f'{num}: {answers[num]}')
print('MISSING', [num for num, ans in answers.items() if not ans])
print('TOTAL', len(answers))
