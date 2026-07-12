from pathlib import Path
p = Path('小児_事後課題/小児_事後課題.md')
data = p.read_bytes()
print('size', len(data))
print('head', data[:80])
for enc in ['utf-8', 'cp932', 'shift_jis', 'utf-8-sig']:
    try:
        text = data.decode(enc)
        print('enc', enc, 'ok', text.splitlines()[0][:40])
    except Exception as e:
        print('enc', enc, 'err', e)
