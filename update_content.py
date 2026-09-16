import re

with open('e:/WEDIING/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

reps = {
    r'>Messi<': '>SURIYA<',
    r'>Antonella<': '>Jyothika<',
    r'Messi &amp; Antonella': 'SURIYA &amp; Jyothika',
    r'Jorge Messi &amp; Mrs. Celia Cuccittini': 'Sivakumar &amp; Mrs. Lakshmi Sivakumar',
    r'José Rubén Roccuzzo &amp; Mrs. Patricia Blanco': 'Chander Sadanah &amp; Mrs. Seema Sadanah',
    r'Messi Family': 'Sivakumar Family',
    r'Roccuzzo Family': 'Sadanah Family',
    r'19th July 2026': '20th September 2026',
    r'July 17,\s*2026': 'Sept 18,\n                2026',
    r'July 18,\s*2026': 'Sept 19,\n                2026',
    r'July 19,\s*2026': 'Sept 20,\n                2026',
    r'Rosario,\s*Argentina': 'Chennai, Tamil Nadu, India',
    r'City Center Event Hall, Rosario, Santa Fe, Argentina': 'Leela Palace, Chennai, Tamil Nadu, India',
    r'Rosario,Argentina': 'Leela+Palace,Chennai',
    r'Rosario,\+Argentina': 'Leela+Palace,+Chennai'
}

for k, v in reps.items():
    text = re.sub(k, v, text)

with open('e:/WEDIING/index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated index.html successfully.")
