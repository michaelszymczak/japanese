// Basic Groovy Script
String filename = this.args[0]
File file = new File(filename)

def lines = file.readLines()

int min = Integer.MAX_VALUE;
int max = Integer.MIN_VALUE;
int total = 0;

lines.each { line ->
    def numberAndCharacter = line.split(":")
    if (numberAndCharacter.length != 2)
    {
        throw new RuntimeException(numberAndCharacter);
    }
    int num = Integer.valueOf(numberAndCharacter[0])
    def ch = numberAndCharacter[1]

    if (num < min) min = num;
    if (num > max) max = num;
    total++;
}

int[] covered = new int[max + 1];

file.readLines().each { line ->
    def numberAndCharacter = line.split(":")
    int num = Integer.valueOf(numberAndCharacter[0])
    def ch = numberAndCharacter[1]

    for (i = 1; i <= max; i++)
    {
        if (i >= num)
        {
            covered[i]++;
        }
    }
}

for (i = 0; i <= max; i+=10)
{
    //println "$i: " + (int)((covered[i] * 100) / total) + "%, ${covered[i]}";
    println "$i," + (int)((covered[i] * 100) / total);
}

//println "Max $max, Min $min, Total $total"