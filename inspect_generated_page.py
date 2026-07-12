from pathlib import Path
text = Path('小児_事後課題/one.html').read_text(encoding='utf-8')
idx = text.find('<div class=\"box\">')
print(text[idx:idx+300])
print('---')
print(repr(text[idx:idx+300]))
