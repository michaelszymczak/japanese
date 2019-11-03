https://github.com/scriptin/kanji-frequency/tree/master/gh-pages
cat news.json | sed 's/\[//g' | sed 's/\]//g' | sed 's/\"//g' | grep -v all | cut -d, -f1,3 > kanij_by_frequency.txt


