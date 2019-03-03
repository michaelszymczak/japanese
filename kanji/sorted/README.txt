
Present only in RTK:

comm -2 -3 rtk_sorted.txt jlpt_all_sorted.txt

Present only in jlpt:

comm -2 -3 rtk_sorted.txt jlpt_all_sorted.txt

(up to jlpt2 all of them present in RTK)

Info about the order in RTK.
    
for i in $(cat jlpt5_sorted.txt); do grep -n "$i" rtk_book_order.txt; done


