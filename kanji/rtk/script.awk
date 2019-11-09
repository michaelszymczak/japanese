BEGIN {
    FS=","
    OFS=","
    sum=0
    learned = ""
    files_count=0
}

BEGINFILE {
    files_count = files_count +1
}

{
  if (files_count == 1)
  {
    # load all learned
    print "processing first file" FILENAME
    learned = learned $0
  }

  else if (files_count == 2)
  {
    position=index(learned, $1) 
    if (position > 0)
    {
     sum += $2
     print $1,"L",position,$2,sum
    }
    else
    {
     print $1," "," ",$2,sum
    }
  }
}
