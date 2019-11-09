https://github.com/scriptin/kanji-frequency/tree/master/gh-pages
cat news.json | sed 's/\[//g' | sed 's/\]//g' | sed 's/\"//g' | grep -v all | cut -d, -f1,3 > kanij_by_frequency.txt

To update learned kanji list export to rtk_flashcards.csv and then

less rtk_flashcards.csv | cut -d, -f2 | xargs | sed 's/[\"a-zA-Z ]//g' | sed 's/\(.*\)/learned = \"\1\"/'


To see no learned yet, edit script.awk list and then

awk -f script.awk kanji_jlpt4_inclusive_probablility_fake.txt | grep "L,4[2-9][0-9]" | cut -d, -f1,3 | sed 's/,/\t/g' | sort -k2 -n >> missing_for_jlpt4.txt

