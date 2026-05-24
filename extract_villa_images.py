import os

INPUT  = '/Users/alfa/Documents/site/Виллла принца.pdf'
OUTDIR = '/Users/alfa/Documents/site/public/images/'

os.makedirs(OUTDIR, exist_ok=True)

with open(INPUT, 'rb') as f:
    data = f.read()

positions = []
start = 0
while True:
    pos = data.find(b'\xff\xd8\xff', start)
    if pos == -1:
        break
    end = data.find(b'\xff\xd9', pos)
    if end != -1:
        size = end - pos + 2
        if size > 30_000:
            positions.append((pos, size))
    start = pos + 1

print(f'Found {len(positions)} usable images (>30KB)')
for i, (pos, size) in enumerate(positions, 1):
    out_path = os.path.join(OUTDIR, f'villa-raw-{i:02d}.jpg')
    with open(out_path, 'wb') as out:
        out.write(data[pos : pos + size])
    print(f'  villa-raw-{i:02d}.jpg  ({size // 1024} KB)')

print('Done.')
