https://github.com/scriptin/kanji-frequency/tree/master/gh-pages

```
cat news.json | sed 's/\[//g' | sed 's/\]//g' | sed 's/\"//g' | grep -v all | cut -d, -f1,3 > kanij_by_frequency_news.txt
cat twitter.json | sed 's/\[//g' | sed 's/\]//g' | sed 's/\"//g' | grep -v all | cut -d, -f1,3 > kanij_by_frequency_twitter.txt
cat wikipedia.json | sed 's/\[//g' | sed 's/\]//g' | sed 's/\"//g' | grep -v all | cut -d, -f1,3 > kanij_by_frequency_wikipedia.txt
```

To update learned kanji list export to rtk_flashcards.csv and then

```
cat rtk_flashcards.csv | cut -d, -f2 | xargs | sed 's/[\"a-zA-Z ]//g' > learned.txt
```

To see learned against some level:

```
awk -f script.awk all_to_learn.txt kanji_by_frequency_news.txt > results/all_to_learn_kanji_by_frequency_news.txt
```

To see all covered against some level:

```
awk -f script.awk learned.txt kanji_by_frequency_news.txt > results/learned_kanji_by_frequency_news.txt
awk -f script.awk learned.txt kanji_by_frequency_twitter.txt > results/learned_kanji_by_frequency_twitter.txt
awk -f script.awk learned.txt kanji_by_frequency_wikipedia.txt > results/learned_kanji_by_frequency_wikipedia.txt
awk -f script.awk learned.txt kanji_jlpt1_inclusive_probablility_fake.txt > results/learned_kanji_jlpt1_inclusive_probablility_fake.txt
```

