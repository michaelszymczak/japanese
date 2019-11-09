#/bin/bash

cat rtk_flashcards.csv | cut -d, -f2 | xargs | sed 's/[\"a-zA-Z ]//g' > learned.txt
awk -f script.awk learned.txt kanji_by_frequency_news.txt > results/learned_kanji_by_frequency_news.txt
awk -f script.awk learned.txt kanji_by_frequency_twitter.txt > results/learned_kanji_by_frequency_twitter.txt
awk -f script.awk learned.txt kanji_by_frequency_wikipedia.txt > results/learned_kanji_by_frequency_wikipedia.txt
awk -f script.awk learned.txt kanji_jlpt4_inclusive_probablility_fake.txt > results/learned_kanji_jlpt4_inclusive_probablility_fake.txt
awk -f script.awk learned.txt kanji_jlpt3_inclusive_probablility_fake.txt > results/learned_kanji_jlpt3_inclusive_probablility_fake.txt
awk -f script.awk learned.txt kanji_jlpt1_inclusive_probablility_fake.txt > results/learned_kanji_jlpt1_inclusive_probablility_fake.txt
