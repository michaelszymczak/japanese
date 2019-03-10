def reader = System.in.newReader()

def input = null;
int count = 0;
Set<String> entries = new LinkedHashSet<>();
while ((input = reader.readLine()) != null)
{ 
  entries.add(input);
  count++
}

entries.forEach { println it }
