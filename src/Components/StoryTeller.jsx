// src/components/StoryTeller.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import story from "../assets/story.jpg";

const storiesData = [
  {
    title: "The Girl Who Planted Stars",
    content:
      "In a sleepy village tucked between the hills, lived a girl named Sela who believed stars were seeds dropped by the moon. Every night, she'd walk barefoot under the sky and whisper secrets to the wind. One night, she found a glowing pebble and planted it in the meadow. Days turned into weeks, and the villagers laughed at her—until one twilight, a tiny light bloomed from the soil. 🌟 That night, the meadow burst into constellations, each one whispering ancient lullabies. From then on, kids didn’t fear the dark, because Sela had lit it with her dreams.",
  },
  {
    title: "የችግረኛ ጓደኛ በእርግጥ ወዳጅ ነው",
    content:
      "በአንድ ወቅት በጫካ ውስጥ አንበሳ ይኖር ነበር ። አንድ ቀን ከባድ ምግብ ከተመገበ በኋላ። ከዛፍ በታች ተኝቶ ነበር ። ከጥቂት ጊዜ በኋላ አንድ አይጥ መጣና በአንበሳው ላይ መጫወት ጀመረ። በድንገት አንበሳው በቁጣ ተነሳና ጥሩ እንቅልፍ የረበሹትን ሰዎች አየ። ከዚያም አንዲት ትንሽ አይጥ በፍርሃት እየተንቀጠቀጠች ቆማ አየች። አንበሳው ላይ ዘልሎ መግደል ጀመረ። አይጡም አንበሳውን ይቅር እንዲለው ጠየቁት። አንበሳው አዘነና ትቶት ሄደ። አይጧ ሮጠች።በሌላ ቀን ደግሞ አንበሳው በአደን መረብ ተያዘ። አይጧም እዚያ መጥታ መረቡን ቆረጠች። በዚህ መንገድ አመለጠ ። ከዚያ በኋላ አይጧና አንበሳው ጓደኛሞች ሆኑ። ከዚያ በኋላ በጫካ ውስጥ በደስታ ኖረዋል ።",
  },
  {
    title: "አንድ ከተማ አይጥ እና ሀገር አይጥ",
    content:
      "አንድ ከተማ አይጥና የአገር አይጥ ጓደኞች ነበሩ ። ሀገር አይጥ አንድ ቀን ጓደኛውን በሜዳ ቤቱ መጥቶ እንዲያየው ጋበዘው። የከተማዋ አይጥ መጥቶ የገብስ እርባታ እራት ላይ ተቀምጠው የኋለኞቹ ንጣፍ ጣዕሞች ነበሯቸው ።ጣዕሙ ለእንግዳው ጣዕም ብዙም አልነበረም። አሁን ምስኪኑ ወዳጄ፣ እዚህ የምትኖረው ከጉንዳኖች የተሻለ አይደለም። አሁን ደግሞ ምን እንደምኖር ማየት ይኖርብሃል! እጭዬ ዘወትር የብዙ ቀንድ ነው። መጥተህ ከእኔ ጋር ቆይ፤ በምድሪቱ ስብ ላይ እንደምትኖር ቃል እገባልሃለሁ።በመሆኑም ወደ ከተማ በተመለሰ ጊዜ የካንትሪ አይጡን ይዞ ዱቄት፣ የዕፀዋት፣ የበለስ፣ የበለስ፣ የማርና የተቀጣጠለ እጭ ውስጥ አሳየው።ካንትሪ አይጥ እንዲህ ያለ ነገር አይቶ አያውቅም እናም ጓደኛው በሰጣቸው የቅንጦት ዕቃዎች ለመደሰት ተቀምጦ ነበር። ይሁን እንጂ ገና ከመጀመራቸው በፊት የእጮቹ በር ተከፍቶ አንዱ ገባ ። ሁለቱ አይነቶች በጠባብና እጅግ ምቹ ባልሆነ ጉድጓድ ውስጥ ተደበቁ። በአሁኑ ጊዜ ሁሉም ነገር ጸጥ ሲል እንደገና ወደ ውጭ ወጡ ። ይሁን እንጂ አንድ ሌላ ሰው ገባና እንደገና ተሽከረከሩ። ይህ ለጎብኚው በጣም ከባድ ነበር ። ደህና ሁን አለኝ አረፈኝ። አንተ የምትኖረው የቅንጦት ኑሮ ባለበት አካባቢ ነው፤ አንተ ግን በአደገኛ ሁኔታ ተከበሃል፤ ቤት ውስጥ ግን ሥሬንና በቆሎዬን በሰላም እበላለሁ።",
  },
  {
    title: "ዝሆን እና ጓደኞች",
    content:
      "ከዕለታት አንድ ቀን አንድ ዝሆን ወዳጆቹን ፍለጋ ጫካ ውስጥ ተቅበዘበዘ።አንድ ዝንጀሮ ዛፍ ላይ አየየአማርኛ የአማርኛ ምሳሌ ነው.-ጓደኛዬ ትሆናለህ?-ሲል ዝሆኑን ጠየቀው።ጦጣውንም መለሰለት። በጣም ትልቅ ነህ። እንደ እኔ ካሉ ዛፎች ልትወዛወዝ አትችልም።-ከዚያም ዝሆን ከጥንቸል ጋር ተገናኘ ። ጓደኛው እንዲሆን ጠየቀው ።ጥንቸል ግን -በኔ ጉድጓድ ውስጥ ለመጫወት በጣም ትልቅ ነሽ!- አለችው።ከዚያም ዝሆኑ እንቁራሪት አገኘ።-ወዳጄ ትሆናለህ? ብሎ ጠየቀ ።-እንዴት እችላለሁ?- ብሎ ጠየቀ እንቁራሪት።-አንተ በጣም ትልቅ ነህ እንደኔ ለመዝለል-።ዝሆኑ በጣም ተበሳጭቶ ነበር ። ቀጥሎም ቀበሮ አገኘ።-ወዳጄ ትሆናለህ?- ሲል ቀበሮውን ጠየቀው።ቀበሮውም ይቅርታ ጌታዬ፣ በጣም ትልቅ ነህ።-አለችው።በሚቀጥለው ቀን ዝሆኑ በጫካው ውስጥ ያሉ እንስሳት በሙሉ ሕይወታቸውን ለማትረፍ ሲሯሯጡ ተመለከተ።ዝሆኑ ምን እንደሆነ ጠየቃቸው ።ድቡም መልሶ በጫካ ውስጥ ደረጃ አለ። ሁላችንንም ሊደበዝዝብን እየሞከረ ነው!እንስሶቹ በሙሉ ለመደበቅ ሮጠዋል።ዝሆኑ በጫካ ውስጥ ያሉትን ሁሉ ለመፍታት ምን ማድረግ እንደሚችል አሰበ ።ይህ በእንዲህ እንዳለ ነብር ማግኘት የሚችለውን ሁሉ መብላቱን ቀጠለ።ዝሆኑም ወደ ነብር ሄደና -እባክህ አቶ ነብር እባክህ እነዚህን ምስኪን እንስሳት አትበላቸው-አለው።-የራስህን ጉዳይ አስብ! እያለ ነብሩን አጉረመርመ።ዝሆኑ ነብርን ከመምታት ሌላ አማራጭ የለውም።በፍርሃት የፈራው ነብር ሕይወቱን ለማትረፍ ሮጠ።ዝሆኑ ምስራቹን ለሁሉም ለማሳወቅ ወደ ጫካው ተመለሰ።ሁሉም እንስሳት ዝሆኑን አመሰገኑ።ወዳጃችን ለመሆን ትክክለኛ መጠን አለህ አሉ።",
  },
  {
    title: "የተራበ ተኩላ",
    content:
      "በአንድ ወቅት ተኩላ በጣም ተርቦ ነበር ። እዚህም ሆነ በዚያ ምግብ ፍለጋ ነበር ። ግን ምንም ሊያገኝ አልቻለም። በመጨረሻም በዛፍ ጉድጓድ ውስጥ አንድ ዳቦና ስጋ አገኘ ።የተራበው ተኩላ ወደ ጉድጓዱ ገባ። ምግቡን ሁሉ በላ። እንጨት ቆራጭ ምሳ ነበር። ምሳ ለምሳ ወደ ዛፉ እየተመለሰ ነበር። ነገር ግን በጉድጓዱ ውስጥ ምንም ምግብ እንደሌለ አየ፤ ይልቁንም ተኩላ።ተኩላው እንጨት ቆራጩን ሲያይ ከጉድጓዱ ለመውጣት ሞከረ። ይሁን እንጂ አልተቻለም ። እብጠቱ ያብጥ ነበር።እንጨት ቆራጩ ተኩላውን ያዘውና ጥሩ ድብደባ አደረገበት።",
  },
  {
    title: "ዝሆን ገመዳ (እምነት)",
    content:
      "አንዳንድ ጊዜ የሚያነሳሳ ታሪክ በውስጣችን ያለውን ጥንካሬ ለማወቅ ይረዳናል። የሚያነሳሳ ታሪክ እራሳችሁን ለማነሳሳት እና እራሳችሁን ለማነሳሳት ይረዳችኋል። በተጨማሪም ምን ማድረግ እንደምትችልና ምን ማድረግ እንደማትችል ለማወቅ ይረዳሃል ። በሕይወትህ ውስጥ ያነበብከው በመቶዎች የሚቆጠሩ ሰዎች ሊኖሩ ይችላሉ ። ይሁን እንጂ በአእምሮህ ውስጥ ለውጥ ያደረጉት ምን ያህል ሰዎች ናቸው የሚለው ጥያቄ ነው ።ሀይለኛ ትምህርት ብቻ ሳይሆን ስለ ህይወት አንዳንድ የማይታወቁ እውነቶችን ለመማር የሚረዱ አንዳንድ የሚያነሳሱ አጫጭር ታሪኮች ከዚህ በታች ቀርበዋል።አንድ ሰው በዝሆን ካምፕ ውስጥ እየተራመደ ሳለ ዝሆኖቹ በቆርቆሮ ውስጥ እንደማይቆዩ ወይም በሰንሰለት እንዳያዙ ተመለከተ።ከካምፑ እንዳያመልጡ ያግዳቸው የነበረው ነገር ቢኖር ከአንዱ እግራቸው ጋር የታሰረ ትንሽ ገመድ ነበር ።ሰውየው ዝሆኖቹ ላይ ትኩር ብሎ ሲመለከት ዝሆኖቹ ገመዱን ለመስበርና ከካምፑ ለማምለጥ ብቻ ጉልበታቸውን ያልተጠቀሙበት ለምን እንደሆነ ግራ ገባው። በቀላሉ እንዲህ ማድረግ ይችሉ ነበር፤ ከዚህ ይልቅ በጭራሽ ይህን ለማድረግ አልሞከሩም።የማወቅ ጉጉት ስላደረበትና መልሱን ለማወቅ ስለፈለገ ዝሆኖቹ እዚያው ቆመው ለማምለጥ ያልሞከሩት ለምን እንደሆነ በአቅራቢያው የሚገኝን አንድ አሠልጣኝ ጠየቀ ።አሰልጣኙ መለሰ፤በጣም ወጣት እና በጣም ትንሽ ሲሆኑ እነርሱን ለማሰር ተመሳሳይ መጠን ያለው ገመድ እንጠቀማለን እናም በዚያ እድሜ እነሱን ለመያዝ በቂ ነው. እያደጉ ሲሄዱ መለያየት እንደማይችሉ ለማመን ይቸኩላሉ ። ገመዱ አሁንም ሊይዛቸው እንደሚችል ያምናሉ፤ በመሆኑም ለመስበር ፈጽሞ አይሞክሩም።ዝሆኖቹ ነፃ ያልወጡበትና ከካምፑ ያልመለጡበት ብቸኛው ምክንያት ከጊዜ በኋላ ይህ ሊሆን አይችልም የሚለውን እምነት በመቀበላቸው ነው።ሥነ ምግባር፦ ዓለም ምንም ያህል ወደኋላ እንድትል ቢጥርህ ምናምን ምንጊዜም ልታከናውን የምትፈልገው ነገር ሊገኝ ይችላል የሚል እምነት ይኑርህ። ስኬታማ መሆን እንደምትችል ማመን ይህን ለማሳካት የሚረዳህ ከሁሉ የላቀው እርምጃ ነው ።",
  },
  {
    title: "አንድ ኪሎ ቅቤ (ቅንነት)",
    content:
      "አንድ ገበሬ አንድ ኪሎ ቅቤ ለዳቦ ጋጋሪ ይሸጥ ነበር ። ከዕለታት አንድ ቀን ዳቦ ጋጋሪው ትክክለኛውን መጠን እያገኘ እንደሆነ ለማየት ቅቤውን ለመመዘን ወሰነ። በዚህም ተቆጥቶ ገበሬውን ወደ ፍርድ ቤት ወሰደው ።ዳኛው ቅቤውን ለመመዘን አንድ ዓይነት እርምጃ እየተጠቀሙ እንደሆነ ገበሬውን ጠየቁት ። ገበሬውም -ክብር፣ እኔ ጥንት ነኝ። ትክክለኛ መለኪያ የለኝም፤ ነገር ግን መጠነ ሰፊ ነው።ዳኛውም -ታዲያ ቅቤውን እንዴት ትመዝነዋለህ?- ብለው ጠየቁ።ገበሬው መለሰ፤-ክብርህ፣ ዳቦ ጋጋሪው ቅቤ ከመግዛቱ ከረጅም ጊዜ በፊት፣ አንድ ኪሎ ዳቦ ገዛሁለት። በየቀኑ ዳቦጋጋሪው ዳቦውን ሲያመጣ በመጠን አስቀምጠውና ያንኑ ክብደት በቅቤ እሰጠዋለሁ። ማንም ቢወቀስ ዳቦ ጋጋሪው ነው።ሞራል፦ በሕይወት ውስጥ የምትሰጠውን ታገኛለህ። ሌሎችን ለማጭበርበር አትሞክር። ",
  },
  {
    title: "ቢራቢሮ (ትግሉ)",
    content:
      "አንድ ሰው ቢራቢሮ አገኘ።አንድ ቀን ትንሽ ክፍተት ብቅ አለ ። ቢራቢሮዋ ሰውነቷን በዚያች ትንሽ ጉድጓድ ውስጥ አስገድዳ ለማለፍ በሚታገልበት ጊዜ ለበርካታ ሰዓታት ተቀምጦ ይመለከት ነበር ።በድንገት ምንም ዓይነት እድገት ማድረጉን አቁሞ የተጣበቀ መስሎ እስኪታያት ድረስ።ስለዚህ ሰውየው ቢራቢሮውን ለመርዳት ወሰነ ። አንድ ጥንድ መቀስ ወስዶ የቀረውን የኮሶውን ጥቂት ቆራረጠ። በዚህ ጊዜ ቢራቢሮው የሚያብጥ አካልና ክንፎቹ ቢበጠሱም በቀላሉ ብቅ አለ።ሰውየው ምንም አላሰበም ነበር። እዚያም ተቀምጦ ቢራቢሮውን ለመደገፍ ክንፎቹ እስኪስፋፉ ድረስ ይጠባበቅ ነበር። ይሁን እንጂ ይህ አልሆነም ። ቢራቢሮዋ በቀሪው የሕይወት ዘመኗ መብረር አቅቷት በትንንሽ ክንፎችና በሰውነት ውስጥ እያብጠበጠ ችግሯን አሳለፈች።የሰውዬው ደግ ልብ ቢኖርም፣ የቁንጅናው መገደብ እና በትንሹ ክፍተት ውስጥ ራሱን ለማለፍ ቢራቢሮ የሚያስፈልገው ትግል እንዳለ አልገባውም ነበር፤ አምላክ ከቢራቢሮ አካል ውስጥ ፈሳሽ ወደ ክንፎቹ እንዲገባ ያስገደደበት መንገድ ነው ። ከኮኮን ከወጣ በኋላ ለመብረር ራሱን ለማዘጋጀት ነው።ሞራል፦ በሕይወታችን ውስጥ የምናደርገው ትግል ጠንካራ ጎናችንን ያዳብራል። ያለ ትግል፣ ፈጽሞ አናድግም እናም አንጠነክርም፣ ስለዚህ ፈተናዎችን በራሳችን መወጣት፣ እና በሌሎች እርዳታ አለመታመን አስፈላጊ ነው።",
  },
  {
    title: "ሳሙል ሙላት (ፍቅር)",
    content:
      "ከተወሰነ ጊዜ በፊት አንድ ሰው የ3 ዓመት ሴት ልጁን የወርቅ መጠቅለያ ወረቀት በማባከኑ ቀጣት። ገንዘቡ በጣም ጥብቅ ስለነበር ልጁ በገና ዛፍ ሥር ለማስቀመጥ ሣጥን ለማስዋብ ሲሞክር በጣም ተቆጣ።ያም ሆኖ ትንሿ ልጅ በማግስቱ ጠዋት ስጦታውን ለአባቷ አመጣችና -አባዬ ይህ ለአንተ ነው አለችው።ሰውዬው ከመጠን በላይ መቆጣቱ አሳፈረው፤ ሆኖም ሣጥኑ ባዶ መሆኑን ሲመለከት ቁጣው አልቀጠለም። ጮኸባት፤ -አታውቀውም? ለአንድ ሰው ስታደርግ፣ በውስጡ አንድ ነገር መኖር አለበት ተብሎ ይታሰባል?-ትንሿ ልጅ ዓይኖቿ እያለቀሱ ወደ እርሱ ቀና ብላ አየችውና አለቀሰች፤ኧረ አባዬ! በጭራሽ ባዶ አይደለም። በሣጥኑ ውስጥ መሳም ጀመርኩ። ሁሉም ለአንተ ናቸው አባዬ።አባትየው ተጨፈጨፈ። ትንሿን ልጁን እቅፍ አድርጎ ይቅርታ እንዲሰጣት ለመነ።ከጥቂት ጊዜ በኋላ በአደጋ ምክንያት የልጁን ሕይወት አቃጠለ ።አባቷ የወርቁን ሳጥን ለበርካታ ዓመታት በአልጋው አጠገብ አስቀምጦት ነበር። ተስፋ በቆረጠም ጊዜ ሁሉ ምናባዊ መሳም አውጥቶ በዚያ ያስቀመጠውን ልጅ ፍቅር ያስታውሰው ነበር።ሞራል፦ ፍቅር በዓለም ላይ እጅግ የከበረ ስጦታ ነው።",
  },
  {
    title: "አድናቆትን ማዳበርን ተማር",
    content:
      "በአንድ ወቅት በጣም የሚረዳ፣ ደግና ለጋስ የሆነ ሰው ነበር። አንድን ሰው ምንም ነገር ሳይመልስለት የሚረዳ ሰው ነበር ። የሚፈልገውንና የሚወደውን ሰው ይረዳዋል ። ከዕለታት አንድ ቀን አቧራማ በሆነ መንገድ ላይ እየተራመደ ሳለ ይህ ሰው ቦርሳ አየና ቦርሳውን አንስቶ ቦርሳው ባዶ መሆኑን አስተዋለ። ድንገት ፖሊስ የያዘች አንዲት ሴት ብቅ አለችና አሰረችው።ሴትየዋም ገንዘቧን የት እንደደበቃት ደጋግማ ትጠይቅ ነበር። ሰውየው ግን እኔ ስላገኘሁት ባዶ ነበር። ማም- ብሎ መለሰለት። ሴትየዋም እባክህ መልሰህ ስጠው፣ ለልጄ የትምህርት ቤት ክፍያ ነው-ብላ ጮኸችው። ሰውየው ሴትየዋ በጣም እንዳዘነች ስላስተዋለ ገንዘቡን በሙሉ ሰጠው ። ሴትየዋ ነጠላ እናት እንደሆነች ሊናገር ይችላል ። ሰውየውም -እነዚህን ይውሰዱ፣ ለተመቸኝ አዝኑ አለ። ሴትየዋ ሄደችና ፖሊሱ ተጨማሪ ምርመራ ለማድረግ ሰውየውን ይዞት ሄደ ።ሴትየዋ በጣም ተደስታ የነበረ ቢሆንም ከጊዜ በኋላ ገንዘቧን ስትቆጥር በእጥፍ ስለጨበጠች በጣም ደነገጠች ። ከዕለታት አንድ ቀን ሴት የልጇን የትምህርት ቤት ክፍያ ለትምህርት ቤቱ ልትከፍል ስትል አንድ ቀጭን ሰው ከኋላዋ እየሄደ መሆኑን አስተዋለች። ሊዘርፋት ይችላል ብላ ስላሰበች በአቅራቢያዋ ወደሚገኝ አንድ ፖሊስ ቀረበች ። እሱም ይኸው ፖሊስ ሲሆን እሷም ቦርሳዋን ለመጠየቅ ይዛት ሄደች ። ሴቲቱ ስለተከተላት ሰው ነገረችው፤ ሆኖም ሰውየው በድንገት ሲደመሰስ አዩት። ወደ እሱም ሮጠው ሄዱና ቦርሳውን በመስረቃቸው ከጥቂት ቀናት በፊት ያሰሩት ሰው እሱ መሆኑን አዩት።በጣም ደካማ ይመስል ነበር እናም ሴት ግራ ተጋባች። ፖሊሱ ሴትየዋን -ገንዘብሽን አልመለሰልህም፤ ያን ቀን ገንዘቡን ሰጠሽ። እሱ ሌባ አልነበረም ነገር ግን ስለ ልጅህ የትምህርት ቤት ክፍያ ሲሰማ አዝኖ ገንዘቡን ሰጠህ። በኋላ ምነው ወንድ እንዲቆም ረዱት። ሰውየውም ለሴቲቱ እባክህ ሂድና የልጅሽን የትምህርት ቤት ክፍያ ክፈል። አይቼሽ የልጅሽን የትምህርት ቤት ክፍያ ማንም እንዳይሰርቅብኝ ተከትዬተሽ ነበር። አላት። ሴትየዋ ምስጥ ነበረች ሥነ ምግባር፦ ሕይወት እንግዳ የሆኑ ተሞክሮዎችን ይሰጥሃል፤ አንዳንድ ጊዜ ደግሞ ያስደነግጥሃል፤ አንዳንድ ጊዜ ደግሞ ሊያስገርምህ ይችላል። በመጨረሻም በንዴታችን ፣ በተስፋ መቁረጥና በተስፋ መቁረጥ ስሜት የተሳሳተ ፍርድ ወይም ስህተት እንሠራለን ። ይሁን እንጂ ሌላ አጋጣሚ ስታገኝ ስህተታችሁን በማስተካከል ሞገሱን መልሱለት ። ደግና ለጋስ ሁን ። የተሰጠህን ነገር ማድነቅን ተማር ።",
  },
  {
    title: "The Mirror in the Library",
    content:
      "In the oldest corner of the school library, behind the dusty encyclopedias, there was a mirror nobody dared to touch. Legend said it didn’t show reflections, it showed *truths*. One day, curious and bored, 15-year-old Dani brushed away the cobwebs and looked in. Instead of her face, she saw a future where she was fearless, leading protests, helping others, changing lives. Scared but inspired, she started small—standing up to a bully. From that day on, Dani visited the mirror weekly, not to see the future, but to check how close she was getting to it. 🪞✨",
  },
  {
    title: "The Skateboard That Could Talk",
    content:
      "Jayden found it at a thrift store — old, scratched, and taped up. But something about the skateboard *called* to him. First ride, he heard it: 'Let’s fly!' he fell off in shock. But the board wasn’t evil, just dramatic. Over time, they became friends — yeah, a boy and a talking skateboard. Turns out, it was once owned by a pro-skater who vanished in a storm. The board remembered tricks, stories, and rivalries. With its help, Jayden trained like a beast and made it to the championship. When he won, the board whispered, 'You set me free.' Then it cracked in two, as if its soul had finished its ride. 🛹⚡",
  },
  {
    title: "The Girl Who Spoke in Colors",
    content:
      "Every time Mia spoke, colors came out of her mouth. Not metaphors — real light! A joke? Yellow giggles. Sad thoughts? Deep blues. Love? Blazing crimson. At first, kids were obsessed with her — then annoyed, then scared. They didn’t understand. So Mia stayed silent for weeks. One day, a new boy named Theo arrived. He was colorblind. 'I can’t see what they see, but I love how your voice *feels*,' he said. With him, Mia finally felt free. Her colors became music, her silence turned into rainbows. She learned that even if some don’t *get* you, someone eventually *will*. 🌈",
  },
  {
    title: "The Invisible Hoodie",
    content:
      "At a garage sale, Ezra bought an old hoodie with a note: 'Only the lost may wear this.' He thought it was edgy. But when he put it on, people stopped seeing him. Like — *literally*. He was invisible. Scared at first, he used it to skip school, sneak into concerts, and hear what others said about him. That’s when it hit him — everyone was fighting their own battles. The hoodie didn’t make him invisible... it revealed how often people feel unseen. He gave it to another lonely soul, with a new note: 'You’re not invisible to me.' 🖤",
  },
  {
    title: "The Cloud Who Wanted to Paint",
    content:
      "There was a cloud who didn’t want to rain. Instead, he wanted to paint the sky. So every sunset, he threw colors everywhere — pink, orange, purple! People called it sunset magic, but it was just the cloud living his artist dream.",
  },
  {
    title: "Luna and the Talking Tree",
    content:
      "Luna was a little girl who loved adventures. One day in the forest, she found a tree that whispered, 'If you sing to me, I’ll show you a secret world.' She sang her heart out, and BAM! A portal opened to a candy land filled with chocolate rivers and marshmallow clouds.",
  },
  {
    title: "Max the Explorer Puppy",
    content:
      "Max was a puppy who wore a red backpack. Every morning, he'd bark, 'Adventure time!!' One day, he found a lost kitten and helped her get home — earning a golden badge from the Animal Adventure Club. Max became the legend of the neighborhood.",
  },
  {
    title: "The Magic Crayon",
    content:
      "Nina found a crayon that could make anything she drew come to life. She drew a flying bicycle, a pet unicorn, and even a castle made of ice cream! But she learned to be careful — once, she drew a giant spaghetti monster... and it almost ate her homework!",
  },

  {
    title: "The Shoes That Remembered",
    content:
      "Emma bought secondhand sneakers. Every time she wore them, she had dreams — of another girl’s life. Same town. Same school. Different decade. She started retracing the girl’s steps and found a hidden diary buried under the football field. The girl had vanished in 1989... and wanted to be found.",
  },
  {
    title: "The Carnival That Only Came at Night",
    content:
      "Every full moon, a strange carnival appeared outside town. No tickets. No staff. Just rides that ran themselves. Teens who snuck in found booths that showed memories, games that challenged fears, and prizes that granted second chances. But you could only leave once you learned the lesson meant for you.",
  },
  {
    title: "The Messages in the Locker",
    content:
      "Locker 237 started receiving notes. At first they were jokes. Then advice. Then confessions. No one knew who wrote them. The student who owned the locker started answering back — and what started as a joke turned into a silent friendship that saved them both.",
  },
  {
    title: "The Pencil Case Portal",
    content:
      "Ravi’s pencil case was boring — until he found a switch inside. Flicking it opened a portal under his desk. The portal led to random memories — not just his, but others’ too. He saw fights, love letters, dreams, and mistakes. He started writing them down. He became the school’s unofficial memory keeper.",
  },
  {
    title: "The Tattoo That Changed Daily",
    content:
      "A senior woke up with a different tattoo every day — symbols, words, images. Some funny, some terrifying. She started documenting them, then realized they matched events in her school. One tattoo even warned her about a fight that hadn’t happened yet. She had to choose: speak up or stay silent.",
  },
  {
    title: "The Detention Time Capsule",
    content:
      "As punishment, five students had to clean the old janitor’s closet. They found a box labeled 'Open in 2040'. Inside? Letters written by students from the past, talking about their fears, crushes, and futures. One letter was addressed to one of *them*. Suddenly detention wasn’t punishment — it was destiny.",
  },
  {
    title: "The Selfie That Glitched",
    content:
      "Zara took a selfie and noticed something weird — her reflection was smiling... but she wasn’t. Every photo after that showed a slightly different version of herself. She started following the clues in the pics and realized she was being warned — by herself — from another timeline.",
  },
  {
    title: "The Principal's Kid",
    content:
      "No one knew the new kid was the principal’s child — until they stood up to a bully, shut down gossip, and rewrote the school rules from the inside. Turns out, being invisible gave them power. And they used it to flip the whole school vibe for the better.",
  },
];

export default function StoryTeller() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!storiesData || storiesData.length === 0) {
      setError("No stories found. Please try again later.");
    }
  }, []);

  const handleNext = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % storiesData.length);
  };

  const handlePrevious = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 1 + storiesData.length) % storiesData.length
    );
  };

  if (error) {
    return (
      <div style={styles.container}>
        <p style={styles.errorBox}>⚠️ {error}</p>
        <Link to="/" style={backLinkStyle}>
          <button style={buttonStyle}>⬅ Back Home</button>
        </Link>
      </div>
    );
  }
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundImage: `url(${story})`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    storyCard: {
      maxWidth: "800px",
      width: "95%",
      backgroundColor: "#3399FF",
      padding: "20px",
      marginTop: "80px",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    },
    storyTitle: {
      fontSize: "1.8rem",
      color: "#333",
      marginBottom: "10px",
      textAlign: "center",
    },
    storyContent: {
      fontSize: "1.2rem",
      color: "#555",
      lineHeight: "1.7",
      textAlign: "center",
    },
    navigation: {
      marginTop: "20px",
      display: "flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    errorBox: {
      marginTop: "100px",
      backgroundColor: "#CC0033",
      color: "#d8000c",
      padding: "15px 20px",
      borderRadius: "10px",
      fontWeight: "bold",
      textAlign: "center",
    },
  };
  const backLinkStyle = {
    position: "absolute",
    top: "20px",
    left: "10px",
    textDecoration: "none",
    zIndex: 10,
  };

  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "1rem",
    backgroundColor: "#000066",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
    margin: "5px",
  };
  const backButtonStyle = {
    padding: "8px 16px",
    fontSize: "1rem",
    backgroundColor: "#00FFFF",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={backLinkStyle}>
        <button style={backButtonStyle}>⬅ Back Home</button>
      </Link>

      <div style={styles.storyCard}>
        <h2 style={styles.storyTitle}>
          {storiesData[currentStoryIndex].title}
        </h2>
        <p style={styles.storyContent}>
          {storiesData[currentStoryIndex].content}
        </p>
      </div>

      <div style={styles.navigation}>
        <button
          onClick={handlePrevious}
          disabled={currentStoryIndex === 0}
          style={buttonStyle}
        >
          ⬅ Previous
        </button>
        <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
          Story {currentStoryIndex + 1} of {storiesData.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentStoryIndex === storiesData.length - 1}
          style={buttonStyle}
        >
          Next ➡
        </button>
      </div>
      <button>add your own story</button>
    </div>
  );
}
