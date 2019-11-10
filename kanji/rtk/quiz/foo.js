'use strict'
function main() {
//  const db = () => databaseSample();
  const dbSupplier = () => database();

  const parsedDb = supplier => supplier().split("\n").slice(1)
    .map(line => line.split(","))
    .filter(cols => cols.length == 8)
    .map(cols => { return { "id": cols[2], "kanji": cols[0], "keyword": cols[4] } })
    .filter(entry => entry.keyword.length > 0)

  const entriesSupplier = (firstId, lastId) => parsedDb(dbSupplier)
    .filter(entry => entry.id >= firstId && entry.id <= lastId)




  console.log(entriesSupplier(1, 10));




}

main();

function databaseSample() {
return `kanji,id_5th_ed,id_6th_ed,keyword_5th_ed,keyword_6th_ed,components,on_reading,kun_reading
一,1,1,one,one,,イチ; イツ,ひと-; ひと.つ
二,2,2,two,two,,ニ; ジ,ふた; ふた.つ; ふたた.び
三,3,3,three,three,,サン; ゾウ,み; み.つ; みっ.つ`;
}

function database() {
return `kanji,id_5th_ed,id_6th_ed,keyword_5th_ed,keyword_6th_ed,components,on_reading,kun_reading
一,1,1,one,one,,イチ; イツ,ひと-; ひと.つ
二,2,2,two,two,,ニ; ジ,ふた; ふた.つ; ふたた.び
三,3,3,three,three,,サン; ゾウ,み; み.つ; みっ.つ
四,4,4,four,four,pent in; human legs,シ,よ; よ.つ; よっ.つ; よん
五,5,5,five,five,,ゴ,いつ; いつ.つ
六,6,6,six,six,top hat; animal legs,ロク; リク,む; む.つ; むっ.つ; むい
七,7,7,seven,seven,diced,シチ,なな; なな.つ; なの
八,8,8,eight,eight,,ハチ,や; や.つ; やっ.つ; よう
九,9,9,nine,nine,baseball,キュウ; ク,ここの; ここの.つ
十,10,10,ten,ten,needle,ジュウ; ジッ; ジュッ,とお; と
口,11,11,mouth,mouth,,コウ; ク,くち
日,12,12,day,day,sun,ニチ; ジツ,ひ; -び; -か
月,13,13,month,month,moon; flesh; part of the body,ゲツ; ガツ,つき
田,14,14,rice field,rice field,brains,デン,た
目,15,15,eye,eye,,モク; ボク,め; -め; ま-
古,16,16,old,old,tombstone; gravestone; church; ten; needle; mouth,コ,ふる.い; ふる-; -ふる.す
吾,17,17,I,I,five; mouth,ゴ,われ; わが-; あ-
冒,18,18,risk,risk,sun; day; eye,ボウ,おか.す
朋,19,19,companion,companion,moon; month; flesh; part of the body,ホウ,とも
明,20,20,bright,bright,sun; day; moon; month; flesh; part of the body,メイ; ミョウ; ミン,あ.かり; あか.るい; あか.るむ; あか.らむ; あき.らか; あ.ける; -あ.け; あ.く; あ.くる; あ.かす
唱,21,21,chant,chant,mouth; prosperous; sun; day; tongue wagging,ショウ,とな.える
晶,22,22,sparkle,sparkle,day; sun,ショウ,
品,23,23,goods,goods,mouth,ヒン; ホン,しな
呂,24,24,spine,spine,mouth; drop,ロ; リョ,せぼね
昌,25,25,prosperous,prosperous,sun; day,ショウ,さかん
早,26,26,early,early,sunflower; sun; day; ten; needle,ソウ; サッ,はや.い; はや; はや-; はや.まる; はや.める; さ-
旭,27,27,rising sun,rising sun,nine; baseball; sun; day,キョク,あさひ
世,28,28,generation,generation,ten; twenty,セイ; セ; ソウ,よ; さんじゅう
胃,29,29,stomach,stomach,rice field; brains; moon; month; flesh; part of the body,イ,
旦,30,30,nightbreak,nightbreak,sun; one; floor,タン; ダン,あき.らか; あきら; ただし; あさ; あした
胆,31,31,gall bladder,gall bladder,gallbladder; moon; month; flesh; part of the body; nightbreak; sun; day; one; floor,タン,きも
亘,32,32,span,span,one; ceiling; sun; day; one; floor,コウ; カン,わた.る; もと.める
凹,33,33,concave,concave,,オウ,くぼ.む; へこ.む; ぼこ
凸,34,34,convex,convex,,トツ,でこ
旧,35,35,olden times,olden times,stick; sun; day,キュウ,ふる.い; もと
自,36,36,oneself,oneself,drop; eye,ジ; シ,みずか.ら; おの.ずから; おの.ずと
白,37,37,white,white,drop; sun; day,ハク; ビャク,しろ; しら-; しろ.い
百,38,38,hundred,hundred,one; ceiling; white; dove,ヒャク; ビャク,もも
中,39,39,in,in,stick; mouth,チュウ,なか; うち; あた.る
千,40,40,thousand,thousand,drop; ten; needle,セン,ち
舌,41,41,tongue,tongue,thousand; drop; ten; needle; mouth,ゼツ,した
升,42,42,measuring box,measuring box,thousand; drop; ten; needle,ショウ,ます
昇,43,43,rise up,rise up,sun; day; measuring box; thousand; drop; ten; needle,ショウ,のぼ.る
丸,44,44,round,round,drop; nine; baseball,ガン,まる; まる.める; まる.い
寸,45,45,measurement,measurement,glue; drop; ten with a hook,スン,
肘,2464,46,elbow,elbow,moon; month; flesh; part of the body; glue,チュウ,ひじ
専,46,47,specialty,specialty,ten; needle; rice field; brains; glue,セン,もっぱ.ら
博,47,48,Dr.,Dr.,ten; needle; acupuncturist; specialty; drop; ten; needle; rice field; brains; glue,ハク; バク,
占,48,49,fortune-telling,fortune-telling,magic wand; augury; divining rod; mouth,セン,し.める; うらな.う
上,49,50,above,above,magic wand; augury; divining rod; one; floor,ジョウ; ショウ; シャン,うえ; -うえ; うわ-; かみ; あ.げる; -あ.げる; あ.がる; -あ.がる; あ.がり; -あ.がり; のぼ.る; のぼ.り; のぼ.せる; のぼ.す; よ.す
下,50,51,below,below,one; ceiling; magic wand; augury; divining rod,カ; ゲ,した; しも; もと; さ.げる; さ.がる; くだ.る; くだ.り; くだ.す; -くだ.す; くだ.さる; お.ろす; お.りる
卓,51,52,eminent,eminent,magic wand; augury; divinging rod; sunflower; sun; day; ten; needle,タク,
朝,52,53,morning,morning,mist; ten; needle; early; sun; day; moon; month; flesh; part of the body,チョウ,あさ
嘲,2155,54,derision,derision,mouth; morning; mist; ten; needle; early; sun; day; moon; month; flesh; part of the body,チョウ; トウ,あざけ.る
只,53,55,only,only,mouth; animal legs; eight,シ,ただ
貝,54,56,shellfish,shellfish,clam; oyster; eye; animal legs; eight,バイ,かい
唄,2178,57,pop song,pop song,mouth; shellfish; clam; oyster; eye; animal legs; eight,バイ,うた; うた.う
貞,55,58,upright,upright,magic wand; augury; divining rod; shellfish; clam; oyster; eye; animal legs; eight,テイ,さだ
員,56,59,employee,employee,mouth; shellfish; clam; oyster; eye; animal legs; eight,イン,
貼,2736,60,affix,post a bill,shellfish; clam; oyster; eye; animal legs; eight; fortune-telling; magic wand; augury; mouth,テン; チョウ,は.る; つ.く
見,57,61,see,see,eye; human legs,ケン,み.る; み.える; み.せる
児,58,62,newborn babe,newborn babe,olden times; stick; sun; day; human legs,ジ; ニ; ゲイ,こ; -こ; -っこ
元,59,63,beginning,beginning,two; human legs,ゲン; ガン,もと
頁,60,64,page,page,one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ケツ,ぺえじ; おおがい; かしら
頑,61,65,stubborn,stubborn,beginning; two; human legs; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ガン,かたく
凡,62,66,mediocre,mediocre,drop; wind,ボン; ハン,およ.そ; おうよ.そ; すべ.て
負,63,67,defeat,defeat,bound up; shellfish; clam; oyster; eye; animal legs; eight,フ,ま.ける; ま.かす; お.う
万,64,68,ten thousand,ten thousand,one; ceiling; bound up,マン; バン,よろず
句,65,69,phrase,phrase,bound up; mouth,ク,
肌,66,70,texture,texture,moon; month; flesh; part of the body; wind,キ,はだ
旬,67,71,decameron,decameron,bound up; sun; day,ジュン; シュン,
勺,68,72,ladle,ladle,bound up; drop,シャク,
的,69,73,bull's eye,bull's eye,bull’s eye; white; dove; ladle; bound up; drop,テキ,まと
首,70,74,neck,neck,horns; nose; one; ceiling; drop; eye,シュ,くび
乙,71,75,fish guts,fish guts,fishguts; fishhook,オツ; イツ,おと-; きのと
乱,72,76,riot,riot,tongue; thousand; drop; ten; needle; mouth; fishhook,ラン; ロン,みだ.れる; みだ.る; みだ.す; みだ; おさ.める; わた.る
直,73,77,straightaway,straightaway,ten; needle; eye; fishhook,チョク; ジキ; ジカ,ただ.ちに; なお.す; -なお.す; なお.る; なお.き; す.ぐ
具,74,78,tool,tool,eye; one; animal legs; eight,グ,そな.える; つぶさ.に
真,75,79,true,true,ten; needle; eye; tool; one; animal legs; eight,シン,ま; ま-; まこと
工,76,80,craft,craft,artificial,コウ; ク; グ,
左,77,81,left,left,by one’s side; craft,サ; シャ,ひだり
右,78,82,right,right,by one’s side; mouth,ウ; ユウ,みぎ
有,79,83,possess,possess,by one’s side; moon; month; flesh; part of the body,ユウ; ウ,あ.る
賄,80,84,bribe,bribe,shellfish; clam; oyster; eye; animal legs; eight; possess; by one’s side; moon; month; flesh; part of the body,ワイ,まかな.う
貢,81,85,tribute,tribute,craft; shellfish; clam; oyster; eye; animal legs; eight,コウ; ク,みつ.ぐ
項,82,86,paragraph,paragraph,craft; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,コウ,うなじ
刀,83,87,sword,sword,dagger,トウ,かたな; そり
刃,84,88,blade,blade,drop; sword; dagger,ジン; ニン,は; やいば; き.る
切,85,89,cut,cut,seven; diced; sword; dagger,セツ; サイ,き.る; -き.る; き.り; -き.り; -ぎ.り; き.れる; -き.れる; き.れ; -き.れ; -ぎ.れ
召,86,90,seduce,seduce,sword; dagger; mouth,ショウ,め.す
昭,87,91,shining,shining,sun; day; seduce; summon; sword; dagger; mouth,ショウ,
則,88,92,rule,rule,shellfish; clam; oyster; eye; animal legs; eight; sword; sabre; saber,ソク,のっと.る
副,89,93,vice-,vice-,wealth; one; ceiling; mouth; rice field; brains; sword; sabre; saber,フク,
別,90,94,separate,separate,mouth; bound up; sword; sabre; saber,ベツ,わか.れる; わ.ける
丁,91,95,street,street,nail; spike,チョウ; テイ; チン; トウ; チ,ひのと
町,92,96,village,village,rice field; brains; street; nail; spike,チョウ,まち
可,93,97,can,can,mouth; street; street; nail; spike,カ; コク,-べ.き
頂,94,98,place on the head,place on the head,street; nail; spike; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,チョウ,いただ.く; いただき
子,95,99,child,child,,シ; ス; ツ,こ; -こ; ね
孔,96,100,cavity,cavity,child; fishhook,コウ,あな
了,97,101,complete,complete,child with arms wrapped up,リョウ,
女,98,102,woman,woman,,ジョ; ニョ; ニョウ,おんな; め
好,99,103,fond,fond,woman; child,コウ,この.む; す.く; よ.い; い.い
如,100,104,likeness,likeness,woman; mouth,ジョ; ニョ,ごと.し
母,101,105,mama,mama,mother; breasts,ボ,はは; も
貫,102,106,pierce,pierce,mama; mother; breasts; oyster; shellfish; clam; oyster; eye; animal legs; eight,カン,つらぬ.く; ぬ.く; ぬき
兄,103,107,elder brother,elder brother,teenager; mouth; human legs,ケイ; キョウ,あに
呪,2169,108,curse,curse,mouth; elder brother; teenager; mouth; human legs,ジュ; シュ; シュウ; ズ,まじな.う; のろ.い; まじな.い; のろ.う
克,104,109,overcome,overcome,ten; needle; elder brother; teenager; mouth; human legs,コク,か.つ
小,105,110,little,little,small,ショウ,ちい.さい; こ-; お-; さ-
少,106,111,few,few,little; small; drop,ショウ,すく.ない; すこ.し
大,107,112,large,large,St. Bernard,ダイ; タイ,おお-; おお.きい; -おお.いに
多,108,113,many,many,evening,タ,おお.い; まさ.に; まさ.る
夕,109,114,evening,evening,,セキ,ゆう
汐,110,115,eventide,eventide,water; water droplets; water pistol; evening,セキ,しお; うしお; せい
外,111,116,outside,outside,evening; magic wand; augury,ガイ; ゲ,そと; ほか; はず.す; はず.れる; と-
名,112,117,name,name,evening; mouth,メイ; ミョウ,な; -な
石,113,118,stone,stone,cliff; mouth,セキ; シャク; コク,いし
肖,114,119,resemblance,resemblance,spark; candle; small; little; moon; month; flesh; part of the body,ショウ,あやか.る
硝,115,120,nitrate,nitrate,stone; rock; resemblance; spark; candle; small; little; moon; month; flesh; part of the body,ショウ,
砕,116,121,smash,smash,stone; rock; ninety; nine; baseball; ten; needle,サイ,くだ.く; くだ.ける
砂,117,122,sand,sand,stone; rock; few,サ; シャ,すな
妬,2195,123,jealous,jealous,woman; stone; rock,ト; ツ,ねた.む; そね.む; つも.る; ふさ.ぐ
削,118,124,plane,plane,resemblance; spark; candle; small; little; moon; month; flesh; part of the body; sword; sabre; saber,サク,けず.る; はつ.る; そ.ぐ
光,119,125,ray,ray,small; little; human legs,コウ,ひか.る; ひかり
太,120,126,plump,plump,large; St. Bernard; drop,タイ; タ,ふと.い; ふと.る
器,121,127,utensil,utensil,mouth; large; St. Bernard,キ,うつわ
臭,122,128,stinking,stinking,nose; drop; eye; large; St. Bernard,シュウ,くさ.い; -くさ.い; にお.う; にお.い
嗅,3008,129,sniff,sniff,,キュウ,か.ぐ
妙,123,130,exquisite,exquisite,woman; few,ミョウ; ビョウ,たえ
省,124,131,focus,focus,few; eye,セイ; ショウ,かえり.みる; はぶ.く
厚,125,132,thick,thick,cliff; sun; day; child,コウ,あつ.い; あか
奇,126,133,strange,strange,large; St. Bernard; can; mouth; street; nail; spike,キ,く.しき; あや.しい; くし; めずら.しい
川,127,134,stream,stream,flood,セン,かわ
州,128,135,state,state,stream; flood; drops,シュウ; ス,す
順,129,136,obey,obey,stream; flood; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ジュン,
水,130,137,water,water,,スイ,みず; みず-
氷,131,138,icicle,icicle,drop; water,ヒョウ,こおり; ひ; こお.る
永,132,139,eternity,eternity,drop; water,エイ,なが.い
泉,133,140,spring,spring,white; dove; water,セン,いずみ
腺,2466,141,gland,gland,moon; month; flesh; part of the body; spring; white; dove; water,セン,
原,134,142,meadow,meadow,cliff; spring; white; dove; small; little,ゲン,はら
願,135,143,petition,petition,meadow; cliff; white; dove; small; little; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ガン,ねが.う; -ねがい
泳,136,144,swim,swim,water; water droplets; water pistol; eternity,エイ,およ.ぐ
沼,137,145,marsh,marsh,water; water droplets; water pistol; summon; seduce; sword; dagger; mouth,ショウ,ぬま
沖,138,146,open sea,open sea,water; water droplets; water pistol; in; stick; mouth,チュウ,おき; おきつ; ちゅう.する; わく
汎,2327,147,pan-,pan-,water; water droplets; water pistol; mediocre; wind; drop,ハン; ブ; フウ; ホウ; ホン,ただよ.う; ひろ.い
江,139,148,creek,creek,water; water droplets; water pistol; craft,コウ,え
汰,2316,149,cleanse,cleanse,water; water droplets; water pistol; plump; large; St. Bernard; drop,タ; タイ,おご.る; にご.る; よな.げる
汁,140,150,soup,soup,water; water droplets; water pistol; ten; needle,ジュウ,しる; -しる; つゆ
沙,2296,151,grains of sand,grains of sand,water; water droplets; water pistol; few,サ; シャ,すな; よなげる
潮,141,152,tide,tide,water; water droplets; water pistol; morning; mist; ten; needle; early; sun; day; moon; month; flesh; part of the body,チョウ,しお; うしお
源,142,153,source,source,water; water droplets; water pistol; meadow; cliff; sun; day; small; little,ゲン,みなもと
活,143,154,lively,lively,water; water droplets; water pistol; tongue; drop; old; tombstone; gravestone; church; ten; needle; mouth,カツ,い.きる; い.かす; い.ける
消,144,155,extinguish,extinguish,water; water droplets; water pistol; resemblance; spark; candle; small; little; moon; month; flesh; part of the body,ショウ,き.える; け.す
況,145,156,but of course,but of course,water; water droplets; water pistol; elder brother; teenager; mouth; human legs,キョウ,まし.て; いわ.んや; おもむき
河,146,157,river,river,water; water droplets; water pistol; can; street; nail; spike; mouth,カ,かわ
泊,147,158,overnight,overnight,water; water droplets; water pistol; white; dove,ハク,と.まる; と.める
湖,148,159,lake,lake,water; water droplets; water pistol; uncivilized; zombie; old; tombstone; gravestone; church; ten; needle; mouth; moon; month; flesh; part of the body,コ,みずうみ
測,149,160,fathom,fathom,water; water droplets; water pistol; rule; shellfish; clam; oyster; eye; animal legs; eight; sword; sabre; saber,ソク,はか.る
土,150,161,soil,soil,dirt; ground,ド; ト,つち
吐,151,162,spit,spit,mouth; soil; dirt; ground,ト,は.く; つ.く
圧,152,163,pressure,pressure,cliff; soil; dirt; ground,アツ; エン; オウ,お.す; へ.す; おさ.える; お.さえる
埼,153,164,cape,cape,soil; dirt; ground; strange; large; St. Bernard; street; nail; spike; mouth,キ,さき; さい; みさき
垣,154,165,hedge,hedge,soil; dirt; ground; span; one; ceiling; sun; day; one; floor; one,エン,かき
填,2190,166,stuff up,inlay,,,
圭,155,167,squared jewel,squared jewel,square jewel; ivy; soil; dirt; ground,ケイ; ケ,
封,156,168,seal,seal,ivy; square jewel; soil; dirt; ground; glue,フウ; ホウ,
涯,157,169,horizon,horizon,water; water droplets; water pistol; cliff; ivy; square jewel; soil; dirt; ground,ガイ,はて
寺,158,170,Buddhist temple,Buddhist temple,buddhist temple; soil; dirt; ground; glue,ジ,てら
時,159,171,time,time,sun; day; Buddhist temple; soil; dirt; ground; glue,ジ,とき; -どき
均,160,172,level,level,soil; dirt; ground; ladle; drop,キン,なら.す
火,161,173,fire,fire,,カ,ひ; -び; ほ-
炎,162,174,inflammation,inflammation,fire,エン,ほのお
煩,163,175,anxiety,anxiety,fire; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ハン; ボン,わずら.う; わずら.わす
淡,164,176,thin,thin,water; water droplets; water pistol; inflammation; fire,タン,あわ.い
灯,165,177,lamp,lamp,fire; street; nail; spike,トウ,ひ; ほ-; ともしび; とも.す; あかり
畑,166,178,farm,farm,fire; rice field; brains,,はた; はたけ; -ばたけ
災,167,179,disaster,disaster,stream; flood; fire,サイ,わざわ.い
灰,168,180,ashes,ashes,cliff; fire,カイ,はい
点,169,181,spot,spot,fortune-telling; magic wand; augury; mouth; oven-fire; barbecue,テン,つ.ける; つ.く; た.てる; さ.す; とぼ.す; とも.す; ぼち
照,170,182,illuminate,illuminate,shining; sun; day; summon; seduce; sword; dagger; mouth; oven-fire; barbecue,ショウ,て.る; て.らす; て.れる
魚,171,183,fish,fish,bound up; rice field; brains; oven-fire; barbecue,ギョ,うお; さかな; -ざかな
漁,172,184,fishing,fishing,water; water droplets; water pistol; fish; bound up; rice field; brains; oven-fire; barbecue,ギョ; リョウ,あさ.る
里,173,185,ri,ri,computer; rice field; brains; soil; dirt; ground,リ,さと
黒,174,186,black,black,computer; oven-fire; barbecue,コク,くろ; くろ.ずむ; くろ.い
墨,175,187,black ink,black ink,black; computer; oven-fire; barbecue,ボク,すみ
鯉,176,188,carp,carp,fish; bound up; rice field; brains; oven-fire; barbecue; computer,リ,こい
量,177,189,quantity,quantity,nightbreak; sun; day; one; floor; computer,リョウ,はか.る
厘,178,190,rin,rin,cliff; computer,リン,
埋,179,191,bury,bury,soil; dirt; ground; computer,マイ,う.める; う.まる; う.もれる; うず.める; うず.まる; い.ける
同,180,192,same,same,monks; hood; one; mouth,ドウ,おな.じ
洞,181,193,den,den,water; water droplets; water pistol; same; monks; hood; one; mouth,ドウ,ほら
胴,182,194,trunk,trunk,moon; month; flesh; part of the body; same; monks; hood; one; mouth,ドウ,
向,183,195,yonder,yonder,alien; drop; helmet; hood; mouth,コウ,む.く; む.い; -む.き; む.ける; -む.け; む.かう; む.かい; む.こう; む.こう-; むこ; むか.い
尚,184,196,esteem,esteem,small; little; alien; glass canopy; hood; mouth,ショウ,なお
字,185,197,character,character,house; child,ジ,あざ; あざな; -な
守,186,198,guard,guard,house; glue,シュ; ス,まも.る; まも.り; もり; -もり; かみ
完,187,199,perfect,perfect,house; beginning; two; human legs,カン,
宣,188,200,proclaim,proclaim,house; span; one; ceiling; sun; day; one; floor; one,セン,のたま.う; のたま.わく
宵,189,201,wee hours,wee hours,house; resemblance; spark; candle; small; little; moon; month; flesh; part of the body,ショウ,よい
安,190,202,relax,relax,house; woman,アン,やす.い; やす.まる; やす; やす.らか
宴,191,203,banquet,banquet,relax; house; sun; day; tongue wagging; woman,エン,うたげ
寄,192,204,draw near,draw near,house; strange; large; St. Bernard; can; street; nail; spike; mouth,キ,よ.る; -よ.り; よ.せる
富,193,205,wealth,wealth,house; one; ceiling; mouth; rice field; brains,フ; フウ,と.む; とみ
貯,194,206,savings,savings,shellfish; clam; oyster; eye; animal legs; eight; house; street; nail; spike,チョ,た.める; たくわ.える
木,195,207,tree,tree,wood,ボク; モク,き; こ-
林,196,208,grove,grove,tree; wood,リン,はやし
森,197,209,forest,forest,tree; wood,シン,もり
桂,198,210,Japanese Judas-tree,Japanese Judas-tree,Japanese Judas tree; tree; wood; ivy; square jewel; soil; dirt; ground,ケイ,かつら
柏,199,211,oak,oak,tree; wood; white; dove,ハク; ヒャク; ビャク,かしわ
枠,200,212,frame,frame,tree; wood; ninety; nine; baseball; ten; needle,,わく
梢,201,213,treetops,treetops,tree; wood; resemblance; spark; candle; small; little; moon; month; flesh; part of the body,ショウ,こずえ; くすのき
棚,202,214,shelf,shelf,tree; wood; companion; moon; month; flesh; part of the body; flesh,ホウ,たな; -だな
杏,203,215,apricot,apricot,tree; wood; mouth,キョウ; アン; コウ,あんず
桐,204,216,paulownia,paulownia,tree; wood; same; monks; hood; one; mouth,トウ; ドウ,きり
植,205,217,plant,plant,tree; wood; straightaway; ten; needle; eye; fishhook,ショク,う.える; う.わる
椅,2480,218,chair,chair,tree; wood; strange; large; St. Bernard; street; nail; spike; mouth,イ,
枯,206,219,wither,wither,tree; wood; old; tombstone; gravestone; church; ten; needle; mouth,コ,か.れる; か.らす
朴,207,220,crude,crude,tree; wood; magic wand; augury,ボク,ほう; ほお; えのき
村,208,221,town,town,tree; wood; measure; glue,ソン,むら
相,209,222,inter-,inter-,tree; wood; eye,ソウ; ショウ,あい-
机,210,223,desk,desk,tree; wood; wind,キ,つくえ
本,211,224,book,book,tree; wood; one,ホン,もと
札,212,225,tag,tag,tree; wood; fishhook,サツ,ふだ
暦,213,226,calendar,calendar,cliff; grove; tree; wood; sun; day,レキ,こよみ; りゃく
案,214,227,plan,plan,relax; house; woman; tree; wood,アン,つくえ
燥,215,228,parch,parch,fire; furniture; wooden goods; mouth; tree; wood,ソウ,はしゃ.ぐ
未,216,229,not yet,not yet,tree; wood; one,ミ; ビ,いま.だ; ま.だ; ひつじ
末,217,230,extremity,extremity,tree; wood; one,マツ; バツ,すえ
昧,2445,231,obscure,obscure,sun; not yet; one; tree; wood,マイ; バイ,くら.い; むさぼ.る
沫,218,232,splash,splash,water; water droplets; water pistol; extremity; one; tree; wood,マツ; バツ,あわ; しぶき; つばき
味,219,233,flavor,flavor,mouth; not yet; one; tree; wood,ミ,あじ; あじ.わう
妹,220,234,younger sister,younger sister,woman; not yet; one; tree; wood,マイ,いもうと
朱,221,235,vermilion,vermilion,vermillion; drop; not yet; one; tree; wood,シュ,あけ
株,222,236,stocks,stocks,tree; wood; vermillion; drop; not yet; one; tree; wood,シュ,かぶ
若,223,237,young,young,flowers; right; by one’s side; mouth,ジャク; ニャク; ニャ,わか.い; わか-; も.しくわ; も.し; も.しくは
草,224,238,grass,grass,flowers; sunflower; early; sun; day; ten; needle,ソウ,くさ; くさ-; -ぐさ
苦,225,239,suffering,suffering,flowers; old; tombstone; gravestone; church; ten; needle; mouth,ク,くる.しい; -ぐる.しい; くる.しむ; くる.しめる; にが.い; にが.る
苛,2373,240,bullying,bullying,flowers; can; mouth; street; street; nail; spike,カ,いじ.める; さいな.む; いらだ.つ; からい; こまかい
寛,226,241,tolerant,tolerant,house; flowers; look; see; telescope; eye; human legs,カン,くつろ.ぐ; ひろ.い; ゆる.やか
薄,227,242,dilute,dilute,flowers; water; water droplets; water pistol; acupuncturist; specialty; drop; ten; needle; rice field; brains; glue,ハク,うす.い; うす-; -うす; うす.める; うす.まる; うす.らぐ; うす.ら-; うす.れる; すすき
葉,228,243,leaf,leaf,flowers; Tarzan; generation; tree; wood,ヨウ,は
模,229,244,imitation,imitation,tree; wood; graveyard; flowers; sun; day; large; St. Bernard,モ; ボ,
漠,230,245,vague,vague,water; water droplets; water pistol; graveyard; flowers; sun; day; large; St. Bernard,バク,
墓,231,246,grave,grave,graveyard; flowers; sun; day; large; St. Bernard; soil; dirt; ground,ボ,はか
暮,232,247,livelihood,livelihood,graveyard; flowers; sun; day; large; St. Bernard,ボ,く.れる; く.らす
膜,233,248,membrane,membrane,moon; month; flesh; part of the body; graveyard; flowers; sun; day; large; St. Bernard,マク,
苗,234,249,seedling,seedling,flowers; rice field; brains,ビョウ; ミョウ,なえ; なわ-
兆,235,250,portent,portent,turtle,チョウ,きざ.す; きざ.し
桃,236,251,peach tree,peach tree,tree; wood; portent; turtle,トウ,もも
眺,237,252,stare,stare,eye; portent; turtle,チョウ,なが.める
犬,238,253,dog,dog,large; St. Bernard; drop,ケン,いぬ; いぬ-
状,239,254,status quo,status quo,turtle; chihuahua; dog; large; drop,ジョウ,
黙,240,255,silence,silence,black; computer; chihuahua; dog; large; drop; oven-fire; barbecue,モク; ボク,だま.る; もだ.す
然,241,256,sort of thing,sort of thing,moon; crescent moon; month; flesh; part of the body; chihuahua; dog; large; drop; oven-fire; barbecue,ゼン; ネン,しか; しか.り; しか.し; さ
荻,242,257,reed,reed,flowers; pack of wild dogs; fire,テキ,おぎ
狩,243,258,hunt,hunt,pack of wild dogs; guard; house; glue,シュ,か.る; か.り; -が.り
猫,244,259,cat,cat,pack of wild dogs; seedlings; flowers; rice field; brains,ビョウ,ねこ
牛,245,260,cow,cow,,ギュウ,うし
特,246,261,special,special,cow; Buddhist temple; soil; dirt; ground; glue,トク,
告,247,262,revelation,revelation,cow; mouth,コク,つ.げる
先,248,263,before,before,cow; human legs,セン,さき; ま.ず
洗,249,264,wash,wash,water; water droplets; water pistol; before; cow; human legs,セン,あら.う
介,250,265,jammed in,jammed in,umbrella; stick; walking cane,カイ,
界,251,266,world,world,rice field; brains; jammed in; umbrella; stick; cane,カイ,
茶,252,267,tea,tea,flowers; umbrella; wooden pole,チャ; サ,
脊,2071,268,spinal column,spinal column,I Ching; Master Po; umbrella; moon; month; flesh; part of the body,セキ,せ; せい
合,253,269,fit,fit,meeting; umbrella; one; mouth,ゴウ; ガッ; カッ,あ.う; -あ.う; あ.い; あい-; -あ.い; -あい; あ.わす; あ.わせる; -あ.わせる
塔,254,270,pagoda,pagoda,soil; dirt; ground; flowers; fit; meeting; umbrella; one; mouth,トウ,
王,255,271,king,king,jewel; ball,オウ; ノウ,
玉,256,272,jewel,jewel,king; ball; earring; drop,ギョク,たま; たま-; -だま
宝,257,273,treasure,treasure,house; king; jewel; ball; earring; drop,ホウ,たから
珠,258,274,pearl,pearl,king; jewel; ball; vermillion; drop; not yet; one; tree; wood,シュ,たま
現,259,275,present,present,king; jewel; ball; see; telescope; eye; human legs,ゲン,あらわ.れる; あらわ.す; うつつ; うつ.つ
玩,2567,276,toy,toy,king; jewel; ball; beginning; two; human legs,ガン,もちあそ.ぶ; もてあそ.ぶ
狂,260,277,lunatic,lunatic,pack of wild dogs; king; jewel; ball,キョウ,くる.う; くる.おしい; くるお.しい
旺,2450,278,effulgent,effulgent,sun; day; king; jewel; ball,オウ; キョウ; ゴウ,かがや.き; うつくし.い; さかん
皇,261,279,emperor,emperor,white; dove; king; jewel; ball,コウ; オウ,
呈,262,280,display,display,mouth; king; jewel; ball,テイ,
全,263,281,whole,whole,umbrella; king; jewel; ball,ゼン,まった.く; すべ.て
栓,264,282,plug,plug,tree; wood; whole; umbrella; king; jewel; ball,セン,
理,265,283,logic,logic,king; jewel; ball; computer,リ,ことわり
主,266,284,lord,lord,drop; king; jewel; ball,シュ; ス; シュウ,ぬし; おも; あるじ
注,267,285,pour,pour,water; water droplets; water pistol; candlestick; lord; drop; king; jewel; ball,チュウ,そそ.ぐ; さ.す; つ.ぐ
柱,268,286,pillar,pillar,tree; wood; candlestick; lord; drop; king; jewel; ball,チュウ,はしら
金,269,287,gold,gold,metal; umbrella; drop; king; jewel; ball,キン; コン; ゴン,かね; かな-; -がね
銑,270,288,pig iron,pig iron,pig-iron; metal; gold; before; cow; human legs,セン,
鉢,271,289,bowl,bowl,metal; gold; origin; book; tree; wood; one,ハチ; ハツ,
銅,272,290,copper,copper,metal; gold; same; monks; hood; one; mouth,ドウ,あかがね
釣,273,291,angling,angling,metal; gold; ladle; bound up; drop,チョウ,つ.る; つ.り; つ.り-
針,274,292,needle,needle,metal; gold; ten,シン,はり
銘,275,293,inscription,inscription,metal; gold; name; evening; mouth,メイ,
鎮,276,294,tranquillize,tranquillize,tranquilize; metal; gold; true; truth; ten; needle; eye; tool; animal legs; eight,チン,しず.める; しず.まる; おさえ
道,277,295,road-way,road-way,neck; horns; drop; eye; road,ドウ; トウ,みち
導,278,296,guidance,guidance,neck; horns; drop; eye; road; glue,ドウ,みちび.く
辻,279,297,crossing,crossing,cross; ten; needle; road,,つじ
迅,280,298,swift,swift,fishhook; cross; ten; needle; road,ジン,
造,281,299,create,create,revelation; cow; mouth; road,ゾウ,つく.る; つく.り; -づく.り
迫,282,300,urge,urge,white; dove; road,ハク,せま.る
逃,283,301,escape,escape,turtle; portent; road,トウ,に.げる; に.がす; のが.す; のが.れる
辺,284,302,environs,environs,dagger; sword; road,ヘン,あた.り; ほと.り; -べ
巡,285,303,patrol,patrol,deluge; stream; flood; road,ジュン,めぐ.る; めぐ.り
車,286,304,car,car,sun; ten; needle,シャ,くるま
連,287,305,take along,take along,car; road,レン,つら.なる; つら.ねる; つ.れる; -づ.れ
軌,288,306,rut,rut,car; nine; baseball,キ,
輸,289,307,transport,transport,car; meeting of butchers; umbrella; one; moon; month; flesh; part of the body; sword; sabre; saber,ユ; シュ,
喩,3009,308,metaphor,metaphor,,,
前,290,309,in front,in front,horns; butcher; moon; month; flesh; part of the body; sword; sabre; saber,ゼン,まえ; -まえ
煎,2548,310,roast,roast,in front; horns; butcher; moon; month; flesh; part of the body; sword; sabre; saber; oven-fire; barbecue,セン,せん.じる; い.る; に.る
各,291,311,each,each,walking legs; mouth,カク,おのおの
格,292,312,status,status,tree; wood; each; walking legs; mouth,カク; コウ; キャク; ゴウ,
賂,2738,313,graft,graft,shellfish; clam; oyster; eye; animal legs; eight; each; walking legs; mouth,ロ,まいな.い; まいな.う
略,293,314,abbreviation,abbreviation,rice field; brains; each; walking legs; mouth,リャク,ほぼ; おか.す; おさ.める; はかりごと; はか.る; はぶ.く; りゃく.す; りゃく.する
客,294,315,guest,guest,house; each; walking legs; mouth,キャク; カク,
額,295,316,forehead,forehead,guest; house; each; walking legs; mouth; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ガク,ひたい
夏,296,317,summer,summer,one; ceiling; drop; eye; walking legs,カ; ガ; ゲ,なつ
処,297,318,dispose,dispose,walking legs; wind,ショ,ところ; -こ; お.る
条,298,319,twig,twig,walking legs; tree; wood,ジョウ; チョウ; デキ,えだ; すじ
落,299,320,fall,fall,flowers; water; water droplets; water pistol; each; walking legs; mouth,ラク,お.ちる; お.ち; お.とす
冗,300,321,superfluous,superfluous,crown; weathercock; wind,ジョウ,
冥,2841,322,Hades,Hades,hades; crown; sun; day; six,メイ; ミョウ,くら.い
軍,301,323,army,army,chariot; crown; vehicle; car,グン,
輝,302,324,radiance,radiance,ray; small; little; human legs; army; chariot; crown; vehicle; car,キ,かがや.く
運,303,325,carry,carry,army; chariot; crown; vehicle; car; road,ウン,はこ.ぶ
冠,304,326,crown,crown,beginning; two; human legs; glue,カン,かんむり
夢,305,327,dream,dream,flowers; eye; cross-eyed; net; crown; evening,ム; ボウ,ゆめ; ゆめ.みる; くら.い
坑,306,328,pit,pit,soil; dirt; ground; whirlwind; top hat; wind,コウ,
高,307,329,tall,tall,top hat; mouth; alien; hood; mouth,コウ,たか.い; たか; -だか; たか.まる; たか.める
享,308,330,receive,receive,tall; top hat; mouth; children,キョウ; コウ,う.ける
塾,309,331,cram school,cram school,receive; tall; top hat; mouth; child; children; round; nine; baseball; drop; soil; dirt; ground,ジュク,
熟,310,332,mellow,mellow,receive; tall; top hat; mouth; child; children; round; nine; baseball; drop; oven-fire; barbecue,ジュク,う.れる
亭,311,333,pavilion,pavilion,tall; top hat; mouth; crown; street; nail; spike,テイ; チン,
京,312,334,capital,capital,tall; top hat; mouth; small; little,キョウ; ケイ; キン,みやこ
涼,313,335,refreshing,refreshing,water droplets; water pistol capital; tall; top hat; mouth; small; little,リョウ,すず.しい; すず.む; すず.やか; うす.い; ひや.す; まことに
景,314,336,scenery,scenery,sun; day; capital; tall; top hat; mouth; small; little,ケイ,
鯨,315,337,whale,whale,fish; bound up; rice field; brains; oven-fire; barbecue; capital; tall; top hat; mouth; small; little,ゲイ,くじら
舎,316,338,cottage,cottage,umbrella; earthenware jar; lidded crock; soil; dirt; ground; mouth,シャ; セキ,やど.る
周,317,339,circumference,circumference,glass hood; earthenware jar; lidded crock; soil; dirt; ground; mouth,シュウ,まわ.り
週,318,340,week,week,circumference; running track; earthenware jar; lidded crock; soil; dirt; ground; mouth; road,シュウ,
士,319,341,gentleman,gentleman,samurai,シ,
吉,320,342,good luck,good luck,samurai; mouth,キチ; キツ,よし
壮,321,343,robust,robust,turtle; samurai,ソウ,さかん
荘,322,344,villa,villa,flowers; robust; turtle; samurai,ソウ; ショウ; チャン,ほうき; おごそ.か
売,323,345,sell,sell,samurai; paper punch; Miss World; crown; human legs,バイ,う.る; う.れる
学,324,346,study,study,schoolhouse; owl; crown; child,ガク,まな.ぶ
覚,325,347,memorize,memorize,schoolhouse; owl; crown; see; telescope; eye; human legs,カク,おぼ.える; さ.ます; さ.める; さと.る
栄,326,348,flourish,flourish,schoolhouse; owl; crown; tree; wood,エイ; ヨウ,さか.える; は.え; -ば.え; は.える; え
書,327,349,write,write,brush; tongue wagging; sun; day,ショ,か.く; -が.き; -がき
津,328,350,haven,haven,water; water droplets; water pistol; brush,シン,つ
牧,329,351,breed,breed,cow; taskmaster,ボク,まき
攻,330,352,aggression,aggression,craft; taskmaster,コウ,せ.める
敗,331,353,failure,failure,shellfish; clam; oyster; eye; animal legs; eight; taskmaster,ハイ,やぶ.れる
枚,332,354,sheet of,a sheet of,sheet of…; tree; wood; taskmaster,マイ; バイ,
故,333,355,happenstance,happenstance,old; tombstone; gravestone; church; ten; needle; mouth; taskmaster,コ,ゆえ; ふる.い; もと
敬,334,356,awe,awe,flowers; phrase; bound up; mouth; taskmaster,ケイ; キョウ,うやま.う
言,335,357,say,say,words; keitai; mouth,ゲン; ゴン,い.う; こと
警,336,358,admonish,admonish,awe; flowers; phrase; bound up; mouth; taskmaster; say; words; keitai; mouth,ケイ,いまし.める
計,337,359,plot,plot,say; words; keitai; mouth; ten; needle,ケイ,はか.る; はか.らう
詮,2717,360,elucidate,elucidate,say; words; keitai; mouth; whole; umbrella; king; jewel; ball,セン,せん.ずる; かい; あき.らか
獄,338,361,prison,prison,pack of wild dogs; say; words; keitai; mouth; chihuahua; dog; large; drop,ゴク,
訂,339,362,revise,revise,say; words; keitai; mouth; street; nail; spike,テイ,
訃,3010,363,obituary,obituary,,フ,"しらせ<span class=""Apple-tab-span"" style=""white-space:pre""> </span>"
討,340,364,chastise,chastise,say; words; keitai; mouth; glue,トウ,う.つ
訓,341,365,instruction,instruction,say; words; keitai; mouth; stream; flood,クン; キン,おし.える; よ.む; くん.ずる
詔,342,366,imperial edict,imperial edict,say; words; keitai; mouth; summon; seduce; sword; dagger; mouth,ショウ,みことのり
詰,343,367,packed,packed,say; words; keitai; mouth; aerosol; good luck; samurai; mouth,キツ; キチ,つ.める; つ.め; -づ.め; つ.まる; つ.む
話,344,368,tale,tale,say; words; keitai; mouth; tongue; thousand; mouth,ワ,はな.す; はなし
詠,345,369,recitation,recitation,say; words; keitai; mouth; eternity; drop; water,エイ,よ.む; うた.う
詩,346,370,poem,poem,say; words; keitai; mouth; Buddhist temple; soil; dirt; ground; glue,シ,うた
語,347,371,word,word,say; words; keitai; mouth; I; five; mouth,ゴ,かた.る; かた.らう
読,348,372,read,read,say; words; keitai; mouth; sell; sale; samurai; paper punch; Miss World; crown; human legs,ドク; トク; トウ,よ.む; -よ.み
調,349,373,tune,tune,say; words; keitai; mouth; circumference; running track; soil; dirt; ground; mouth,チョウ,しら.べる; しら.べ; ととの.う; ととの.える
談,350,374,discuss,discuss,say; words; keitai; mouth; inflammation; fire,ダン,
諾,351,375,consent,consent,say; words; keitai; mouth; young; flowers; by one’s side; mouth,ダク,
諭,352,376,rebuke,rebuke,say; words; keitai; mouth; meeting of butchers; moon; month; flesh; part of the body; sword; sabre; saber,ユ,さと.す
式,353,377,style,style,arrow; craft,シキ,
試,354,378,test,test,say; words; keitai; mouth; style; arrow; craft,シ,こころ.みる; ため.す
弐,355,379,II (two),II (two),II; two; arrows; quiver,ニ; ジ,ふた.つ; そえ
域,356,380,range,range,soil; dirt; ground; pope; fiesta; mouth; one; floor,イキ,
賊,357,381,burglar,burglar,shellfish; clam; oyster; eye; animal legs; eight; ten; needle; fiesta,ゾク,
栽,358,382,plantation,plantation,Thanksgiving; harvest festival; ten; needle; fiesta; tree; wood,サイ,
載,359,383,load,load,Thanksgiving; harvest festival; ten; needle; fiesta; car; vehicle,サイ,の.せる; の.る
茂,360,384,overgrown,overgrown,flowers; parade,モ,しげ.る
戚,2882,385,relatives,relatives,half-uncle; above; small; little; parade,ソク; セキ,いた.む; うれ.える; みうち
成,361,386,turn into,turn into,parade; sword; dagger,セイ; ジョウ,な.る; な.す; -な.す
城,362,387,castle,castle,soil; dirt; ground; turn into; parade; sword; dagger,ジョウ,しろ
誠,363,388,sincerity,sincerity,say; words; keitai; mouth; turn into; sword; dagger; parade,セイ,まこと
威,364,389,intimidate,intimidate,march; women; woman,イ,おど.す; おど.し; おど.かす
滅,365,390,destroy,destroy,water; water droplets; water pistol; march; fire,メツ,ほろ.びる; ほろ.ぶ; ほろ.ぼす
減,366,391,dwindle,dwindle,water; water droplets; water pistol; march; mouth,ゲン,へ.る; へ.らす
蔑,2390,392,revile,revile,flowers; eye; cross-eyed; net; march,ベツ,ないがしろ; なみ.する; くらい; さげす.む
桟,367,393,scaffold,scaffold,tree; wood; float; fiesta,サン; セン,かけはし
銭,368,394,coin,coin,metal; gold; float; fiesta,セン; ゼン,ぜに; すき
浅,369,395,shallow,shallow,water; water droplets; water pistol; float; fiesta,セン,あさ.い
止,370,396,stop,stop,footprint,シ,と.まる; -ど.まり; と.める; -と.める; -ど.め; とど.める; とど.め; とど.まる; や.める; や.む; -や.む; よ.す; -さ.す; -さ.し
歩,371,397,walk,walk,stop; footprint; few,ホ; ブ; フ,ある.く; あゆ.む
渉,372,398,ford,ford,water; water droplets; water pistol; walk; stop; footprint; few,ショウ,わた.る
頻,373,399,repeatedly,repeatedly,walk; stop; footprint; few; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ヒン,しき.りに
肯,374,400,agreement,agreement,stop; footprint; moon; month; flesh; part of the body,コウ,がえんじ.る
企,375,401,undertake,undertake,umbrella; stop; footprint,キ,くわだ.てる; たくら.む
歴,376,402,curriculum,curriculum,cliff; grove; tree; wood; stop; footprint,レキ; レッキ,
武,377,403,warrior,warrior,one; arrow; stop; footprint,ブ; ム,たけ.し
賦,378,404,levy,levy,shellfish; clam; oyster; eye; animal legs; eight; warrior; one; stop; footprint; arrow,フ; ブ,
正,379,405,correct,correct,one; ceiling; stop; footprint,セイ; ショウ,ただ.しい; ただ.す; まさ; まさ.に
証,380,406,evidence,evidence,say; words; keitai; mouth; correct; one; ceiling; stop; footprint,ショウ,あかし
政,381,407,politics,politics,correct; one; ceiling; stop; footprint; taskmaster,セイ; ショウ,まつりごと; まん
定,382,408,determine,determine,house; mend,テイ; ジョウ,さだ.める; さだ.まる; さだ.か
錠,383,409,lock,lock,metal; gold; determine; determined; house; mend,ジョウ,
走,384,410,run,run,soil; dirt; ground; mend,ソウ,はし.る
超,385,411,transcend,transcend,run; soil; dirt; ground; mend; summon; seduce; sword; dagger; mouth,チョウ,こ.える; こ.す
赴,386,412,proceed,proceed,run; soil; dirt; ground; mend; magic wand; augury,フ,おもむ.く
越,387,413,surpass,surpass,run; soil; dirt; ground; mend; parade,エツ; オツ,こ.す; -こ.す; -ご.し; こ.える; -ご.え
是,388,414,just so,just so,sun; day; mend,ゼ; シ,これ; この; ここ
題,389,415,topic,topic,just so; sun; day; mend; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ダイ,
堤,390,416,dike,dike,soil; dirt; ground; just so; sun; day; mend,テイ,つつみ
建,391,417,build,build,brush; stretch,ケン; コン,た.てる; た.て; -だ.て; た.つ
鍵,2761,418,key,key,metal; gold; build; brush; stretch,ケン,かぎ
延,392,419,prolong,prolong,drop; stop; footprint; stretch,エン,の.びる; の.べる; の.べ; の.ばす
誕,393,420,nativity,nativity,say; words; keitai; mouth; prolonged; drop; stop; footprint; stretch,タン,
礎,394,421,cornerstone,cornerstone,stone; rock; grove; tree; wood; zoo; critters,ソ,いしずえ
婿,395,422,bridegroom,bridegroom,woman; zoo; critters; moon; month; flesh; part of the body,セイ,むこ
衣,396,423,garment,garment,top hat; scarf; cloth; clothes; clothing,イ; エ,ころも; きぬ; -ぎ
裁,397,424,tailor,tailor,Thanksgiving; harvest festival; ten; needle; fiesta; top hat; scarf; cloth; clothes; clothing; garment,サイ,た.つ; さば.く
装,398,425,attire,attire,turtle; samurai; top hat; scarf; cloth; clothes; clothing; garment,ソウ; ショウ,よそお.う; よそお.い
裏,399,426,back,back,top hat; scarf; computer,リ,うら
壊,400,427,demolition,demolition,soil; dirt; ground; poltergeist; BernaE; ten; needle; eye; cross-eyed; net; top hat; scarf; cloth; clothes; clothing; garment,カイ; エ,こわ.す; こわ.れる; やぶ.る
哀,401,428,pathetic,pathetic,top hat; scarf; mouth,アイ,あわ.れ; あわ.れむ; かな.しい
遠,402,429,distant,distant,earthenware jar; lidded crock; soil; dirt; ground; mouth; scarf; road,エン; オン,とお.い
猿,403,430,monkey,monkey,pack of wild dogs; earthenware jar; lidded crock; soil; dirt; ground; mouth; scarf,エン,さる
初,404,431,first time,first time,cloak; sword; dagger,ショ,はじ.め; はじ.めて; はつ; はつ-; うい-; -そ.める; -ぞ.め
巾,2101,432,towel,towel,,キン; フク,おお.い; ちきり; きれ; はば
布,405,433,linen,linen,by one’s side; towel,フ,ぬの
帆,406,434,sail,sail,towel; mediocre; drop; wind,ハン,ほ
幅,407,435,hanging scroll,hanging scroll,towel; wealth; one; ceiling; mouth; rice field; brains,フク,はば
帽,408,436,cap,cap,towel; risk; sun; day; eye,ボウ; モウ,ずきん; おお.う
幕,409,437,curtain,curtain,graveyard; flowers; sun; day; large; St. Bernard; towel,マク; バク,とばり
幌,410,438,canopy,canopy,towel; limpid; sun; day; ray; small; little; human legs,コウ,ほろ; とばり
錦,411,439,brocade,brocade,metal; gold; napkin; white; dove; towel,キン,にしき
市,412,440,market,market,top hat; towel,シ,いち
柿,2481,441,persimmon,persimmon,tree; wood; market; top hat; towel,シ,かき; こけら
姉,413,442,elder sister,elder sister,woman; market; top hat; towel,シ,あね; はは
肺,414,443,lungs,lungs,moon; month; flesh; part of the body; market; top hat; towel,ハイ,
帯,415,444,sash,sash,buckle; apron; crown; towel,タイ,お.びる; おび
滞,416,445,stagnate,stagnate,water; water droplets; water pistol; sash; buckle; apron; crown; towel,タイ; テイ,とどこお.る
刺,417,446,thorn,thorn,tree; wood; belt; sword; sabre; saber,シ,さ.す; さ.さる; さ.し; さし; とげ
制,418,447,system,system,cow; belt; sword; sabre; saber,セイ,
製,419,448,made in...,made in...,made in…; system; cow; belt; sword; sabre; saber; hat; scarf; cloth; clothes; clothing; garment,セイ,
転,420,449,revolve,revolve,car; rising cloud; two; elbow; wall,テン,ころ.がる; ころ.げる; ころ.がす; ころ.ぶ; まろ.ぶ; うたた; うつ.る; くる.めく
芸,421,450,technique,technique,flowers; rising cloud; two; elbow; wall,ゲイ; ウン,う.える; のり; わざ
雨,422,451,rain,rain,weather,ウ,あめ; あま-; -さめ
雲,423,452,cloud,cloud,rain; weather; rising cloud; two; elbow; wall,ウン,くも; -ぐも
曇,424,453,cloudy weather,cloudy weather,sun; day; cloud; rain; weather; rising cloud; two; elbow; wall,ドン,くも.る
雷,425,454,thunder,thunder,rain; weather; rice field; brains,ライ,かみなり
霜,426,455,frost,frost,rain; weather; inter; Inter Milan; tree; wood; eye,ソウ,しも
冬,427,456,winter,winter,walking legs; ice,トウ,ふゆ
天,428,457,heavens,heavens,one; ceiling; large,テン,あまつ; あめ; あま-
妖,2078,458,bewitched,bewitched,woman; sapling,ヨウ,あや.しい; なま.めく; わざわ.い
沃,2079,459,irrigate,irrigate,water; water droplets; water pistol; sapling,ヨウ; ヨク; オク,そそ.ぐ
橋,429,460,bridge,bridge,tree; wood; angel; heavens; mouth; hood; mouth,キョウ,はし
嬌,430,461,attractive,attractive,woman; angel; heavens; mouth; hood; mouth,キョウ,なまめか.しい
立,431,462,stand up,stand up,vase,リツ; リュウ; リットル,た.つ; -た.つ; た.ち-; た.てる; -た.てる; た.て-; たて-; -た.て; -だ.て; -だ.てる
泣,432,463,cry,cry,water; water droplets; water pistol; vase; stand up,キュウ,な.く
章,433,464,badge,badge,vase; stand up; sunflower; early; sun; day; ten; needle,ショウ,
競,434,465,vie,vie,vase; stand up; elder brother; teenager; mouth; human legs,キョウ; ケイ,きそ.う; せ.る
帝,435,466,sovereign,sovereign,vase; stand up; apron; crown; towel,テイ,みかど
諦,2716,467,give up,renunciation,say; words; keitai; mouth; sovereign; vase; stand up; apron; crown; towel,テイ; タイ,あき.らめる; あきら.める; つまびらか; まこと
童,436,468,juvenile,juvenile,vase; stand up; computer,ドウ,わらべ
瞳,437,469,pupil,pupil,eye; juvenile; vase; stand up; computer,ドウ; トウ,ひとみ
鐘,438,470,bell,bell,metal; gold; juvenile; vase; stand up; computer,ショウ,かね
商,439,471,make a deal,make a deal,vase; stand up; alien; hood; human legs; mouth,ショウ,あきな.う
嫡,440,472,legitimate wife,legitimate wife,woman; antique; vase; stand up; hood; old; tombstone; gravestone; church; ten; needle; mouth,チャク; テキ,
適,441,473,suitable,suitable,antique; vase; stand up; hood; old; tombstone; gravestone; church; ten; needle; mouth; road,テキ,かな.う
滴,442,474,drip,drip,water; water droplets; water pistol; antique; vase; stand up; hood; old; tombstone; gravestone; church; ten; needle; mouth,テキ,しずく; したた.る
敵,443,475,enemy,enemy,antique; vase; stand up; hood; old; tombstone; gravestone; church; ten; needle; mouth; taskmaster,テキ,かたき; あだ; かな.う
匕,444,476,spoon,spoon,sitting on the ground,ヒ,さじ; さじのひ
叱,2179,477,scold,scold,mouth; diced; seven; spoon; sitting on the ground,シツ; シチ,しか.る
匂,2147,478,aroma,aroma,bound up; spoon; sitting on the ground,,にお.う; にお.い; にお.わせる
頃,2791,479,about that time,about that time,spoon; sitting on the ground; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ケイ; キョウ,ころ; ごろ; しばら.く
北,445,480,north,north,spoon; sitting on the ground,ホク,きた
背,446,481,stature,stature,north; spoon; sitting on the ground; moon; month; flesh; part of the body,ハイ,せ; せい; そむ.く; そむ.ける
比,447,482,compare,compare,spoon; sitting on the ground,ヒ,くら.べる
昆,448,483,descendants,descendants,sun; day; compare; spoon; sitting on the ground,コン,
皆,449,484,all,all,compare; spoon; sitting on the ground; white; dove,カイ,みな; みんな
楷,3011,485,block letters,block letters,,カイ,
諧,3012,486,orderliness,orderliness,,カイ,かな.う; やわ.らぐ
混,450,487,mix,mix,water; water droplets; water pistol; descendants; sun; day; compare; spoon; sitting on the ground,コン,ま.じる; -ま.じり; ま.ざる; ま.ぜる; こ.む
渇,451,488,thirst,thirst,water; water droplets; water pistol; mexican bandit; muchacho; siesta; sun; day; aroma; bound up; spoon; sitting on the ground,カツ,かわ.く
謁,452,489,audience,audience,say; words; keitai; mouth; mexican bandit; muchacho; siesta; sun; day; aroma; bound up; spoon; sitting on the ground,エツ,
褐,453,490,brown,brown,cloak; mexican bandit; muchacho; siesta; sun; day; aroma; bound up; spoon; sitting on the ground,カツ,
喝,454,491,hoarse,hoarse,mouth; mexican bandit; muchacho; siesta; sun; day; aroma; bound up; spoon; sitting on the ground,カツ,
葛,2398,492,kudzu,kudzu,flowers; mexican bandit; muchacho; siesta; sun; day; aroma; bound up; spoon; sitting on the ground,カツ; カチ,つづら; くず
旨,455,493,delicious,delicious,spoon; sitting on the ground; sun; day,シ,むね; うま.い
脂,456,494,fat,fat,moon; month; flesh; part of the body; delicious; spoon; sun; day,シ,あぶら
詣,2715,495,visit a shrine,visit a shrine,say; words; keitai; mouth; delicious; spoon; sitting on the ground; sun; day,ケイ; ゲイ,けい.する; まい.る; いた.る; もう.でる
壱,457,496,I (one),I (one),1 (one); samurai; crown; spoon; sitting on the ground,イチ; イツ,ひとつ
毎,458,497,every,every,reclining; lying down; mother,マイ,ごと; -ごと.に
敏,459,498,cleverness,cleverness,every; reclining; lying down; mother; breasts; taskmaster,ビン,さとい
梅,460,499,plum,plum,tree; wood; every; reclining; lying down; mother; breasts,バイ,うめ
海,461,500,sea,sea,water; water droplets; water pistol; every; reclining; lying down; mother; breasts,カイ,うみ
乞,462,501,beg,beg,reclining; lying down; fishhook,コツ; キツ; キ; キケ; コチ,こ.う
乾,463,502,drought,drought,mist; ten; needle; early; sun; day; beg; reclining; lying down; fishhook,カン; ケン,かわ.く; かわ.かす; ほ.す; ひ.る; いぬい
腹,464,503,abdomen,abdomen,moon; month; flesh; part of the body; fold back; double back; reclining; lying down; sun; day; walking legs,フク,はら
複,465,504,duplicate,duplicate,cloak; fold back; double back; reclining; lying down; sun; day; walking legs,フク,
欠,466,505,lack,lack,yawn,ケツ; ケン,か.ける; か.く; あくび
吹,467,506,blow,blow,mouth; lack; yawn,スイ,ふ.く
炊,468,507,cook,cook,fire; lack; yawn,スイ,た.く; -だ.き
歌,469,508,song,song,cancan; can; mouth; street; nail; spike; lack; yawn,カ,うた; うた.う
軟,470,509,soft,soft,car; lack; yawn,ナン,やわ.らか; やわ.らかい
次,471,510,next,next,ice; lack; yawn,ジ; シ,つ.ぐ; つぎ
茨,472,511,briar,briar,flowers; next; ice; lack; yawn,シ; ジ,いばら; かや; くさぶき
資,473,512,assets,assets,next; ice; lack; yawn; shellfish; clam; oyster; eye; animal legs; eight,シ,
姿,474,513,figure,figure,next; ice; lack; yawn; woman,シ,すがた
諮,475,514,consult with,consult with,say; words; keitai; mouth; next; ice; lack; yawn; mouth,シ,はか.る
賠,476,515,compensation,compensation,shellfish; clam; oyster; eye; animal legs; eight; muzzle; vase; stand up; mouth,バイ,
培,477,516,cultivate,cultivate,soil; dirt; ground; muzzle; vase; stand up; mouth,バイ,つちか.う
剖,478,517,divide,divide,muzzle; vase; stand up; mouth; sword; sabre; saber,ボウ,
音,479,518,sound,sound,vase; stand up; sun; day; tongue wagging,オン; イン; ノン,おと; ね
暗,480,519,darkness,darkness,sun; day; sound; vase; stand up; sun; day,アン,くら.い; くら.む; くれ.る
韻,481,520,rhyme,rhyme,sound; vase; stand up; sun; day; employee; mouth; shellfish; clam; oyster; eye; animal legs; eight,イン,
識,482,521,discriminating,discriminating,say; words; keitai; mouth; kazoo; sound; vase; stand up; sun; day; fiesta,シキ,し.る; しる.す
鏡,483,522,mirror,mirror,metal; gold; vase; stand up; sun; day; human legs,キョウ; ケイ,かがみ
境,484,523,boundary,boundary,soil; dirt; ground; mirror; vase; stand up; sun; day; human legs,キョウ; ケイ,さかい
亡,485,524,deceased,deceased,perish; top hat; fishhook,ボウ; モウ,な.い; な.き-; ほろ.びる; ほろ.ぶ; ほろ.ぼす
盲,486,525,blind,blind,deceased; perish; top hat; fishhook; eye,モウ,めくら
妄,487,526,delusion,delusion,deceased; perish; top hat; fishhook; woman,モウ; ボウ,みだ.りに
荒,488,527,laid waste,laid waste,wreath; flowers; deceased; perish; top hat; fishhook; stream; flood,コウ,あら.い; あら-; あ.れる; あ.らす; -あ.らし; すさ.む
望,489,528,ambition,ambition,deceased; perish; top hat; fishhook; moon; month; flesh; part of the body; king; jewel; ball,ボウ; モウ,のぞ.む; もち
方,490,529,direction,direction,compass,ホウ,かた; -かた; -がた
妨,491,530,disturb,disturb,compass; direction; woman,ボウ,さまた.げる
坊,492,531,boy,boy,soil; dirt; ground; compass; direction,ボウ; ボッ,
芳,493,532,perfumed,perfumed,perfume; flowers; compass; direction,ホウ,かんば.しい
肪,494,533,obese,obese,moon; month; flesh; part of the body; compass; direction,ボウ,
訪,495,534,call on,call on,say; words; keitai; mouth; compass; direction,ホウ,おとず.れる; たず.ねる; と.う
放,496,535,set free,set free,compass; direction; taskmaster,ホウ,はな.す; -っぱな.し; はな.つ; はな.れる; こ.く; ほう.る
激,497,536,violent,violent,water; water droplets; water pistol; white; dove; compass; direction; taskmaster,ゲキ,はげ.しい
脱,498,537,undress,undress,moon; month; flesh; part of the body; devil; horns; elder brother; teenager; mouth; human legs,ダツ,ぬ.ぐ; ぬ.げる
説,499,538,rumor / explanation,explanation,rumor; say; words; keitai; mouth; devil; horns; elder brother; teenager; mouth; human legs,セツ; ゼイ,と.く
鋭,500,539,pointed,pointed,metal; gold; devil; horns; elder brother; teenager; mouth; human legs,エイ,するど.い
曽,501,540,formerly,formerly,increase; horns; rice field; brains; sun; day,ソウ; ソ; ゾウ,かつ; かつて; すなわち
増,502,541,increase,increase,soil; dirt; ground; formerly; horns; rice field; brains; sun; day,ゾウ,ま.す; ま.し; ふ.える; ふ.やす
贈,503,542,presents,presents,shellfish; clam; oyster; eye; animal legs; eight; increase; formerly; horns; rice field; brains; sun; day,ゾウ; ソウ,おく.る
東,504,543,east,east,sun; day; tree; wood,トウ,ひがし
棟,505,544,ridgepole,ridgepole,tree; wood; east; tree; wood; sun; day,トウ,むね; むな-
凍,506,545,frozen,frozen,ice; east; tree; wood; sun; day,トウ,こお.る; こご.える; こご.る; い.てる; し.みる
妊,507,546,pregnancy,pregnancy,woman; porter; drop; samurai,ニン; ジン,はら.む; みごも.る
廷,508,547,courts,courts,porter; drop; samurai; stretch,テイ,
染,509,548,dye,dye,water; water droplets; water pistol; nine; baseball; tree; wood,セン,そ.める; -ぞ.め; -ぞめ; そ.まる; し.みる; -じ.みる; し.み; -し.める
燃,510,549,burn,burn,fire; sort of thing; moon; crescent moon; month; flesh; part of the body; chihuahua; dog; large; drop; oven-fire; barbecue,ネン,も.える; も.やす; も.す
賓,511,550,V.I.P.,V.I.P.,house; one; ceiling; few; shellfish; clam; oyster; eye; animal legs; eight,ヒン,
歳,512,551,year-end,year-end,year end; stop; footprint; one; little; small; march,サイ; セイ,とし; とせ; よわい
県,513,552,prefecture,prefecture,eye; fishhook; small; little,ケン,か.ける
栃,514,553,horse chestnut,horse chestnut,tree; wood; Wimbledon; cliff; ten thousand; one; bound up,,とち
地,515,554,ground,ground,soil; dirt; scorpion,チ; ジ,
池,516,555,pond,pond,water; water droplets; water pistol; scorpion,チ,いけ
虫,517,556,insect,insect,in; stick; mouth,チュウ; キ,むし
蛍,518,557,lightning bug,lightning bug,lightning-bug; schoolhouse; owl; crown; insect,ケイ,ほたる
蛇,519,558,snake,snake,insect; wind chimes; house; spoon; sitting on the ground,ジャ; ダ; イ; ヤ,へび
虹,520,559,rainbow,rainbow,insect; craft,コウ,にじ
蝶,521,560,butterfly,butterfly,insect; Tarzan; generation; tree; wood,チョウ,
独,522,561,single,single,pack of wild dogs; insect,ドク; トク,ひと.り
蚕,523,562,silkworm,silkworm,heavens; insect,サン; テン,かいこ; こ
風,524,563,wind,wind,gnats; drop; insect,フウ; フ,かぜ; かざ-; -かぜ
己,525,564,self,self,snake,コ; キ,おのれ; つちのと; な
起,526,565,rouse,rouse,run; soil; dirt; ground; mend; snake; self,キ,お.きる; お.こる; お.こす; おこ.す; た.つ
妃,527,566,queen,queen,woman; snake; self,ヒ,きさき
改,528,567,reformation,reformation,snake; self; taskmaster,カイ,あらた.める; あらた.まる
記,529,568,scribe,scribe,say; words; keitai; mouth; snake; self,キ,しる.す
包,530,569,wrap,wrap,bound up; snake; self,ホウ,つつ.む; くる.む
胞,531,570,placenta,placenta,moon; month; flesh; part of the body; wrap; bound up; snake; self,ホウ,
砲,532,571,cannon,cannon,stone; rock; wrap; bound up; snake; self,ホウ,
泡,533,572,bubbles,bubble,water; water droplets; water pistol; wrap; bound up; snake; self,ホウ,あわ
亀,534,573,tortoise,tortoise,bound up; eels; sun; day,キ; キュウ; キン,かめ
電,535,574,electricity,electricity,rain; weather; eel; sun; day,デン,
竜,536,575,dragon,dragon,vase; stand up; eel; sun; day,リュウ; リョウ; ロウ,たつ; いせ
滝,537,576,waterfall,waterfall,water; water droplets; water pistol; dragon; vase; stand up; eel; sun; day,ロウ; ソウ,たき
豚,538,577,pork,pork,moon; month; flesh; part of the body; sow; pig,トン,ぶた
逐,539,578,pursue,pursue,sow; pig; road,チク,
遂,540,579,consummate,consummate,horns; sow; pig; road,スイ,と.げる; つい.に
家,541,580,house,house,sow; pig,カ; ケ,いえ; や; うち
嫁,542,581,marry into,marry into,woman; house; sow; pig,カ,よめ; とつ.ぐ; い.く; ゆ.く
豪,543,582,overpowering,overpowering,tall; top hat; mouth; crown; sow; pig,ゴウ,えら.い
腸,544,583,intestines,intestines,moon; month; flesh; part of the body; piggy bank; sun; day; piglets,チョウ,はらわた
場,545,584,location,location,soil; dirt; ground; piggy bank; sun; day; piglets,ジョウ; チョウ,ば
湯,546,585,hot water,hot water,water; water droplets; water pistol; piggy bank; sun; day; piglets,トウ,ゆ
羊,547,586,sheep,sheep,horns,ヨウ,ひつじ
美,548,587,beauty,beauty,sheep; large; St. Bernard,ビ; ミ,うつく.しい
洋,549,588,ocean,ocean,water; water droplets; water pistol; sheep,ヨウ,
詳,550,589,detailed,detailed,say; words; keitai; mouth; sheep,ショウ,くわ.しい; つまび.らか
鮮,551,590,fresh,fresh,fish; bound up; rice field; brains; oven-fire; barbecue; sheep,セン,あざ.やか
達,552,591,accomplished,accomplished,soil; dirt; ground; sheep; road,タツ; ダ,-たち
羨,553,592,envious,envious,sheep; water; water droplets; water pistol; lack; yawn,セン; エン,うらや.む; あまり
差,554,593,distinction,distinction,wool; sheep; craft,サ,さ.す; さ.し
着,555,594,don,don,wool; sheep; eye,チャク; ジャク,き.る; -ぎ; き.せる; -き.せ; つ.く; つ.ける
唯,556,595,solely,solely,mouth; turkey,ユイ; イ,ただ
堆,2185,596,piled high,piled high,soil; dirt; ground; turkey,タイ; ツイ,うずたか.い
椎,2505,597,sweet oak,sweet oak,tree; wood; turkey,ツイ; スイ,つち; う.つ
誰,2712,598,who?,who?,who; say; words; keitai; mouth; turkey,スイ,だれ; たれ; た
焦,557,599,char,char,turkey; oven-fire; barbecue,ショウ,こ.げる; こ.がす; こ.がれる; あせ.る
礁,558,600,reef,reef,stone; rock; char; turkey; oven-fire; barbecue,ショウ,
集,559,601,gather,gather,turkey; tree; wood,シュウ,あつ.まる; あつ.める; つど.う
准,560,602,quasi-,quasi-,ice; turkey,ジュン,
進,561,603,advance,advance,turkey; road,シン,すす.む; すす.める
雑,562,604,miscellaneous,miscellaneous,nine; baseball; tree; wood; turkey,ザツ; ゾウ,まじ.える; まじ.る
雌,563,605,feminine,female,Prince; this here; stop; footprint; spoon; sitting on the ground; turkey,シ,め-; めす; めん
準,564,606,semi-,semi-,water; water droplets; water pistol; turkey; ten; needle,ジュン,じゅん.じる; じゅん.ずる; なぞら.える; のり; ひと.しい; みずもり
奮,565,607,stirred up,stirred up,large; St. Bernard; turkey; rice field; brains,フン,ふる.う
奪,566,608,rob,rob,large; St. Bernard; turkey; glue,ダツ,うば.う
確,567,609,assurance,assurance,stone; rock; turkeyhouse; house; turkey,カク; コウ,たし.か; たし.かめる
午,568,610,noon,noon,horse; pantomime horse; sign of the horse,ゴ,うま
許,569,611,permit,permit,say; words; keitai; mouth; horse; pantomime horse; noon; sign of the horse,キョ,ゆる.す; もと
歓,570,612,delight,delight,pegasus; horse; pantomime horse; noon; sign of the horse; turkey; lack; yawn,カン,よろこ.ぶ
権,571,613,authority,authority,tree; wood; pegasus; horse; pantomime horse; noon; sign of the horse; turkey,ケン; ゴン,おもり; かり; はか.る
観,572,614,outlook,outlook,pegasus; horse; pantomime horse; noon; sign of the horse; turkey; see; telescope; eye; human legs,カン,み.る; しめ.す
羽,573,615,feathers,feathers,wings,ウ,は; わ; はね
習,574,616,learn,learn,feathers; wings; white; dove,シュウ; ジュ,なら.う; なら.い
翌,575,617,the following,the following,feathers; wings; vase; stand up,ヨク,
曜,576,618,weekday,weekday,sun; day; futon; feathers; wings; turkey,ヨウ,
濯,577,619,laundry,laundry,water; water droplets; water pistol; futon; feathers; wings; turkey,タク,すす.ぐ; ゆす.ぐ
曰,578,620,sayeth,sayeth,pent in; one,エツ,いわ.く; のたま.う; のたま.わく; ここに; ひらび
困,579,621,quandary,quandary,pent in; tree; wood,コン,こま.る
固,580,622,harden,harden,pent in; old; tombstone; gravestone; church; ten; needle; mouth,コ,かた.める; かた.まる; かた.まり; かた.い
錮,3013,623,weld,weld,,コ,ふさ.ぐ
国,581,624,country,country,pent in; king; jewel; ball; earring; drop,コク,くに
団,582,625,group,group,pent in; glue,ダン; トン,かたまり; まる.い
因,583,626,cause,cause,pent in; large; St. Bernard,イン,よ.る; ちな.む
姻,584,627,matrimony,matrimony,woman; cause; pent in; large; St. Bernard,イン,
咽,2159,628,windpipe,windpipe,mouth; cause; pent in; large; St. Bernard,イン; エン; エツ,むせ.ぶ; むせ.る; のど; の.む
園,585,629,park,park,pent in; earthenware jar; lidded crock; soil; dirt; ground; mouth; scarf,エン,その
回,586,630,-times,-times,times; pent in; mouth,カイ; エ,まわ.る; -まわ.る; -まわ.り; まわ.す; -まわ.す; まわ.し-; -まわ.し; もとお.る; か.える
壇,587,631,podium,podium,soil; dirt; ground; Churchill; top hat; -times; pent in; mouth; nightbreak; sun; day; one; floor,ダン; タン,
店,588,632,store,store,cave; fortune-telling; magic wand; augury; mouth,テン,みせ; たな
庫,589,633,warehouse,warehouse,cave; car,コ; ク,くら
庭,590,634,courtyard,courtyard,cave; courts; porter; drop; samurai; stretch,テイ,にわ
庁,591,635,government office,government office,cave; street; nail; spike,チョウ; テイ,やくしょ
床,592,636,bed,bed,cave; tree; wood,ショウ,とこ; ゆか
麻,593,637,hemp,hemp,cave; grove; tree; wood,マ; マア,あさ
磨,594,638,grind,grind,hemp; cave; grove; tree; wood; stone; rock,マ,みが.く; す.る
心,595,639,heart,heart,drops; fishhook,シン,こころ; -ごころ; りっしんべん
忘,596,640,forget,forget,perish; deceased; top hat; fishhook; heart,ボウ,わす.れる
恣,3014,641,selfish,selfish,,シ,ほしいまま
忍,597,642,endure,endure,blade; sword; dagger; drop; heart,ニン,しの.ぶ; しの.ばせる
認,598,643,acknowledge,acknowledge,say; words; keitai; mouth; endure; blade; sword; dagger; drop; heart,ニン,みと.める; したた.める
忌,599,644,mourning,mourning,snake; self; heart,キ,い.む; い.み; い.まわしい
志,600,645,intention,intention,samurai; heart,シ; シリング,こころざ.す; こころざし
誌,601,646,document,document,say; words; keitai; mouth; intention; samurai; heart,シ,
芯,2368,647,wick,wick,flowers; heart,シン,
忠,602,648,loyalty,loyalty,in; stick; mouth; heart,チュウ,
串,603,649,shish kebab,shish kebab,kebab; in; stick; mouth,カン; ケン; セン,くし; つらぬ.く
患,604,650,afflicted,afflicted,kebab; in; stick; mouth; heart,カン,わずら.う
思,605,651,think,think,rice field; brains; heart,シ,おも.う; おもえら.く; おぼ.す
恩,606,652,grace,grace,cause; pent in; large; St. Bernard; heart,オン,
応,607,653,apply,apply,cave; heart,オウ; ヨウ; ノウ,あた.る; まさに; こた.える
意,608,654,idea,idea,sound; vase; stand up; sun; day; heart,イ,
臆,2460,655,cowardice,cowardice,moon; month; flesh; part of the body; idea; sound; vase; stand up; sun; day; heart,オク; ヨク,むね; おくする
想,609,656,concept,concept,inter milan; inter; tree; wood; eye; heart,ソウ; ソ,おも.う
息,610,657,breath,breath,nose; drop; eye; heart,ソク,いき
憩,611,658,recess,recess,tongue; thousand; mouth; nose; drop; eye; heart,ケイ,いこ.い; いこ.う
恵,612,659,favor,favor,ten; needle; rice field; brains; heart,ケイ; エ,めぐ.む; めぐ.み
恐,613,660,fear,fear,barge; craft; mediocre; drop; wind; heart,キョウ,おそ.れる; おそ.る; おそ.ろしい; こわ.い; こわ.がる
惑,614,661,beguile,beguile,a; pope; fiesta; mouth; one; floor; heart,ワク,まど.う
感,615,662,emotion,emotion,march; mouth; heart,カン,
憂,616,663,melancholy,melancholy,summer; head; page; crown; heart; walking legs,ユウ,うれ.える; うれ.い; う.い; う.き
寡,617,664,widow,widow,house; head; page; animal legs; eight; sword; dagger,カ,
忙,618,665,busy,busy,Freud; state of mind; deceased; perish; top hat; fishhook,ボウ; モウ,いそが.しい; せわ.しい; おそ.れる; うれえるさま
悦,619,666,ecstasy,ecstasy,Freud; state of mind; devil; horns; elder brother; teenager; mouth; human legs,エツ,よろこ.ぶ; よろこ.ばす
恒,620,667,constancy,constancy,Freud; state of mind; span; one; ceiling; sun; day; one; floor; one,コウ,つね; つねに
悼,621,668,lament,lament,Freud; state of mind; eminent; magic wand; augury; sun; day; ten; needle,トウ,いた.む
悟,622,669,enlightenment,enlightenment,Freud; state of mind; I; five; mouth,ゴ,さと.る
怖,623,670,dreadful,dreadful,Freud; state of mind; linen; by one’s side; towel,フ; ホ,こわ.い; こわ.がる; お.じる; おそ.れる
慌,624,671,disconcerted,disconcerted,Freud; state of mind; laid waste; wreath; flowers; deceased; perish; top hat; fishhook; stream; flood,コウ,あわ.てる; あわ.ただしい
悔,625,672,repent,repent,Freud; state of mind; every; reclining; lying down; mother; breasts,カイ,く.いる; く.やむ; くや.しい
憎,626,673,hate,hate,Freud; state of mind; increase; formerly; horns; rice field; brains; sun; day,ゾウ,にく.む; にく.い; にく.らしい; にく.しみ
慣,627,674,accustomed,accustomed,Freud; state of mind; pierce; mother; breasts; shellfish; clam; oyster; eye; animal legs; eight,カン,な.れる; な.らす
愉,628,675,pleasure,pleasure,Freud; state of mind; meeting; umbrella; butchers; moon; month; flesh; part of the body; sword; sabre; saber,ユ,たの.しい; たの.しむ
惰,629,676,lazy,lazy,Freud; state of mind; left-handed; left; by one’s side; craft; moon; month; flesh; part of the body,ダ,
慎,630,677,humility,humility,Freud; state of mind; true; truth; ten; needle; eye; tool; animal legs; eight,シン,つつし.む; つつし; つつし.み
憾,631,678,remorse,remorse,Freud; state of mind; emotion; march; mouth; heart,カン,うら.む
憶,632,679,recollection,recollection,Freud; state of mind; idea; sound; vase; stand up; sun; day; heart,オク,
惧,3015,680,disquieting,disquieting,,ク,おそ.れる
憧,2280,681,yearn,yearn,Freud; state of mind; juvenile; vase; stand up; computer,ショウ; トウ; ドウ,あこが.れる
憬,3016,682,hanker,hanker,,ケイ,あこが.れる
慕,633,683,pining,pining,graveyard; flowers; sun; day; large; St. Bernard; valentine,ボ,した.う
添,634,684,annexed,annexed,water; water droplets; water pistol; heavens; valentine,テン,そ.える; そ.う; も.える; も.う
必,635,685,invariably,invariably,heart; stick; drop; fishhook,ヒツ,かなら.ず
泌,636,686,ooze,ooze,water; water droplets; water pistol; invariably; heart; stick; drop; fishhook,ヒツ; ヒ,
手,637,687,hand,hand,,シュ; ズ,て; て-; -て; た-
看,638,688,watch over,watch over,hand; eye,カン,み.る
摩,639,689,chafe,chafe,hemp; cave; grove; tree; wood; hand,マ,ま.する; さ.する; す.る
我,640,690,ego,ego,hand; fiesta,ガ,われ; わ; わ.が-; わが-
義,641,691,righteousness,righteousness,sheep; ego; hand; fiesta,ギ,
議,642,692,deliberation,deliberation,say; words; keitai; mouth; righteousness; sheep; ego; hand; fiesta,ギ,
犠,643,693,sacrifice,sacrifice,cow; righteousness; sheep; ego; hand; fiesta,ギ; キ,いけにえ
抹,644,694,rub,rub,finger; fingers; extremity; one; tree; wood,マツ,
拭,2254,695,wipe,wipe,finger; fingers; style; arrow; craft,ショク; シキ,ぬぐ.う; ふ.く
拉,3017,696,yank,yank,,ラ; ラツ; ロウ,くだ.く; ひし.ぐ; らっ.する
抱,645,697,embrace,embrace,finger; fingers; wrap; bound up; snake; self,ホウ,だ.く; いだ.く; かか.える
搭,646,698,board,board,finger; fingers; flowers; fit; meeting; umbrella; one; mouth,トウ,
抄,647,699,extract,extract,finger; fingers; few,ショウ,
抗,648,700,confront,confront,finger; fingers; whirlwind; top hat; wind,コウ,
批,649,701,criticism,criticism,finger; fingers; compare; spoon; sitting on the ground,ヒ,
招,650,702,beckon,beckon,finger; fingers; summon; seduce; sword; dagger; mouth,ショウ,まね.く
拓,651,703,clear the land,clear the land,finger; fingers; stone; rock,タク,ひら.く
拍,652,704,clap,clap,finger; fingers; white; dove,ハク; ヒョウ,
打,653,705,strike,strike,finger; fingers; street; nail; spike,ダ; ダアス,う.つ; う.ち-; ぶ.つ
拘,654,706,arrest,arrest,finger; fingers; phrase; bound up; mouth,コウ,かか.わる
捨,655,707,discard,discard,finger; fingers; cottage; little-thatch; umbrella; lidded crock; earthenware jar; soil; dirt; ground; mouth,シャ,す.てる
拐,656,708,kidnap,kidnap,finger; fingers; mouth; sword; dagger,カイ,
摘,657,709,pinch,pinch,finger; fingers; antique; vase; stand up; hood; old; tombstone; gravestone; church; ten; needle; mouth,テキ,つ.む
挑,658,710,challenge,challenge,finger; fingers; turtle; portent,チョウ,いど.む
指,659,711,finger,finger,fingers; delicious; spoon; sitting on the ground; sun; day,シ,ゆび; さ.す; -さ.し
持,660,712,hold,hold,finger; fingers; Buddhist temple; soil; dirt; ground; glue,ジ,も.つ; -も.ち; も.てる
拶,2261,713,imminent,imminent,finger; fingers; stream; flood; evening,サツ,せま.る
括,661,714,fasten,fasten,finger; fingers; tongue; thousand; mouth,カツ,くく.る
揮,662,715,brandish,brandish,finger; fingers; army; chariot; crown; car; vehicle,キ,ふる.う
推,663,716,conjecture,conjecture,finger; fingers; turkey,スイ,お.す
揚,664,717,hoist,hoist,finger; fingers; piggy bank; sun; day; piglets,ヨウ,あ.げる; -あ.げ; あ.がる
提,665,718,propose,propose,finger; fingers; just so; sun; day; mend,テイ; チョウ; ダイ,さ.げる
損,666,719,damage,damage,finger; fingers; employee; mouth; shellfish; clam; oyster; eye; animal legs; eight,ソン,そこ.なう; そこな.う; -そこ.なう; そこ.ねる; -そこ.ねる
拾,667,720,pick up,pick up,finger; fingers; fit; meeting; umbrella; one; mouth,シュウ; ジュウ,ひろ.う
担,668,721,shouldering,shouldering,finger; fingers; nightbreak; sun; day; one; floor,タン,かつ.ぐ; にな.う
拠,669,722,foothold,foothold,finger; fingers; dispose; walking legs; wind,キョ; コ,よ.る
描,670,723,sketch,sketch,finger; fingers; seedlings; flowers; rice field; brains,ビョウ,えが.く; か.く
操,671,724,maneuver,maneuver,finger; fingers; wooden goods; furniture; goods; mouth; tree; wood,ソウ; サン,みさお; あやつ.る
接,672,725,touch,touch,finger; fingers; concubine; vase; stand up; woman,セツ; ショウ,つ.ぐ
掲,673,726,put up a notice,put up a notice,put up (a notice); finger; fingers; mexican bandit; muchacho; siesta; sun; day; aroma; bound up; spoon; sitting on the ground,ケイ,かか.げる
掛,674,727,hang,hang,finger; fingers; ivy; square jewel; soil; dirt; ground; magic wand; augury,カイ; ケイ,か.ける; -か.ける; か.け; -か.け; -が.け; か.かる; -か.かる; -が.かる; か.かり; -が.かり; かかり; -がかり
捗,2269,728,make headway,make headway,finger; fingers; walk; stop; footprint; few,チョク; ホ,はかど.る
研,675,729,polish,polish,stone; rock; two hands,ケン,と.ぐ
戒,676,730,commandment,commandment,two hands; fiesta,カイ,いまし.める
弄,2558,731,tinker with,tinker with,king; jewel; ball; two hands,ロウ; ル,いじく.る; ろう.する; いじ.る; ひねく.る; たわむ.れる; もてあそ.ぶ
械,677,732,contraption,contraption,tree; wood; commandments; two hands; fiesta,カイ,かせ
鼻,678,733,nose,nose,drop; eye; rice field; brains; two hands,ビ,はな
刑,679,734,punish,punish,two hands; sword; sabre; saber,ケイ,
型,680,735,mold,mould,punish; two hands; sword; sabre; saber; soil; dirt; ground,ケイ,かた; -がた
才,681,736,genius,genius,genie,サイ,
財,682,737,property,property,shellfish; clam; oyster; eye; animal legs; eight; genie,ザイ; サイ; ゾク,たから
材,683,738,lumber,lumber,tree; wood; genie,ザイ,
存,684,739,suppose,suppose,genie; child,ソン; ゾン,
在,685,740,exist,exist,genie; soil; dirt; ground,ザイ,あ.る
乃,686,741,from,from,fist,ナイ; ダイ; ノ; アイ,の; すなわ.ち; なんじ
携,687,742,portable,portable,finger; fingers; turkey; fist; from,ケイ,たずさ.える; たずさ.わる
及,688,743,reach out,reach out,fist; from; drop,キュウ,およ.ぶ; およ.び; および; およ.ぼす
吸,689,744,suck,suck,mouth; reach out,キュウ,す.う
扱,690,745,handle,handle,finger; fingers; reach out,ソウ; キュウ,あつか.い; あつか.う; あつか.る; こ.く
丈,691,746,length,length,stick; tucked under the arm,ジョウ,たけ; だけ
史,692,747,history,history,mouth; tucked under the arm,シ,
吏,693,748,officer,officer,history; length; stick; one; mouth; tucked under the arm,リ,
更,694,749,grow late,grow late,Ameratasu; one; ceiling; sun; tucked under the arm,コウ,さら; さら.に; ふ.ける; ふ.かす
硬,695,750,stiff,stiff,stone; rock; grow late; Ameratasu; one; ceiling; sun; tucked under the arm,コウ,かた.い
梗,2498,751,spiny,spiny,tree; wood; grow late; Ameratasu; one; ceiling; sun; tucked under the arm,コウ; キョウ,ふさぐ; やまにれ; おおむね
又,696,752,or again,or again,crotch,ユウ,また; また-; また.の-
双,697,753,pair,pair,crotch,ソウ,ふた; たぐい; ならぶ; ふたつ
桑,698,754,mulberry,mulberry,crotch; tree; wood,ソウ,くわ
隻,699,755,vessels,vessels,turkey; crotch,セキ,
護,700,756,safeguard,safeguard,say; words; keitai; mouth; radio caroline; flowers; vessels; turkey; crotch,ゴ,まも.る
獲,701,757,seize,seize,pack of wild dogs; radio caroline; flowers; vessels; turkey; crotch,カク,え.る
奴,702,758,guy,guy,woman; crotch,ド,やつ; やっこ
怒,703,759,angry,angry,guy; woman; crotch; heart,ド; ヌ,いか.る; おこ.る
友,704,760,friend,friend,by one’s side; crotch,ユウ,とも
抜,705,761,slip out,slip out,finger; fingers; friend; woman; crotch,バツ; ハツ; ハイ,ぬ.く; -ぬ.く; ぬ.き; ぬ.ける; ぬ.かす; ぬ.かる
投,706,762,throw,throw,finger; fingers; cruise missile; missile; wind; crotch,トウ,な.げる; -な.げ
没,707,763,drown,drown,water; water droplets; water pistol; cruise missile; missile; wind; crotch,ボツ; モツ,おぼ.れる; しず.む; ない
股,2454,764,thigh,thigh,moon; month; flesh; part of the body; cruise missile; missile; wind; crotch,コ,また; もも
設,708,765,establishment,establishment,say; words; keitai; mouth; cruise missile; missile; wind; crotch,セツ,もう.ける
撃,709,766,beat,beat,tank; car; cruise missile; missile; wind; crotch; hand,ゲキ,う.つ
殻,710,767,husk,husk,samurai; superfluous; crown; wind; cruise missile; missile; wind; crotch,カク; コク; バイ,から; がら
支,711,768,branch,branch,ten; needle; crotch,シ,ささ.える; つか.える; か.う; しんよう; じゅうまた
技,712,769,skill,skill,finger; fingers; branch; ten; needle; crotch,ギ,わざ
枝,713,770,bough,bough,tree; wood; branch; ten; needle; crotch,シ,えだ
肢,714,771,limb,limb,moon; month; flesh; part of the body; branch; ten; needle; crotch,シ,
茎,715,772,stalk,stalk,flowers; spool; clod; toilet paper; crotch; soil; dirt; ground,ケイ; キョウ,くき
怪,716,773,suspicious,suspicious,Freud; state of mind; spool; clod; toilet paper; crotch; soil; dirt; ground,カイ; ケ,あや.しい; あや.しむ
軽,717,774,lightly,lightly,car; spool; clod; toilet paper; crotch; soil; dirt; ground,ケイ,かる.い; かろ.やか; かろ.んじる
叔,718,775,uncle,uncle,above; small; little; crotch,シュク,
督,719,776,coach,coach,uncle; above; small; little; crotch; eye,トク,
寂,720,777,loneliness,loneliness,house; uncle; above; small; little; crotch,ジャク; セキ,さび; さび.しい; さび.れる; さみ.しい
淑,721,778,graceful,graceful,water; water droplets; water pistol; uncle; above; small; little; crotch,シュク,しと.やか
反,722,779,anti-,anti-,demonstation; cliff; crotch,ハン; ホン; タン; ホ,そ.る; そ.らす; かえ.す; かえ.る; -かえ.る
坂,723,780,slope,slope,soil; dirt; ground; anti-; demonstration; cliff; crotch,ハン,さか
板,724,781,plank,plank,tree; wood; anti-; demonstration; cliff; crotch,ハン; バン,いた
返,725,782,return,return,anti-; demonstration; cliff; crotch; road,ヘン,かえ.す; -かえ.す; かえ.る; -かえ.る
販,726,783,marketing,marketing,shellfish; clam; oyster; eye; animal legs; eight; anti-; demonstration; cliff; crotch,ハン,
爪,727,784,claw,claw,vulture,ソウ,つめ; つま-
妥,728,785,gentle,gentle,claw; vulture; woman,ダ,
乳,729,786,milk,milk,fledgling; claw; vulture; child; fishhook,ニュウ,ちち; ち
浮,730,787,floating,floating,water; water droplets; water pistol; fledgling; claw; vulture; child,フ,う.く; う.かれる; う.かぶ; む; う.かべる
淫,2298,788,lewd,lewd,water; water droplets; water pistol; claw; vulture; porter; drop; samurai,イン,ひた.す; ほしいまま; みだ.ら; みだ.れる; みだり
将,731,789,leader,leader,turtle; claw; vulture; glue,ショウ; ソウ,まさ.に; はた; まさ; ひきい.る; もって
奨,732,790,exhort,exhort,leader; turtle; claw; vulture; glue; large; St. Bernard,ショウ; ソウ,すす.める
采,2090,791,grab,grab,claw; vulture; tree; wood,サイ,と.る; いろどり
採,733,792,pick,pick,finger; fingers; grab; claw; vulture; tree; wood,サイ,と.る
菜,734,793,vegetable,vegetable,flowers; grab; claw; vulture; tree; wood,サイ,な
受,735,794,accept,accept,birdhouse; birdcage; claw; vulture; crown; crotch,ジュ,う.ける; -う.け; う.かる
授,736,795,impart,impart,finger; fingers; accept; birdhouse; birdcage; claw; vulture; crown; crotch,ジュ,さず.ける; さず.かる
愛,737,796,love,love,birdhouse; birdcage; claw; vulture; crown; love birds; heart; walking legs,アイ,いと.しい
曖,2437,797,equivocal,unclear,sun; love; birdhouse; birdcage; claw; vulture; crown; love birds; heart; walking legs,アイ,くら.い
払,738,798,pay,pay,finger; fingers; elbow,フツ; ヒツ; ホツ,はら.う; -はら.い; -ばら.い
広,739,799,wide,wide,cave; elbow,コウ,ひろ.い; ひろ.まる; ひろ.める; ひろ.がる; ひろ.げる
勾,2148,800,flexed,hooked,bound up; elbow,コウ; ク,かぎ; ま.がる
拡,740,801,broaden,broaden,finger; fingers; wide; cave; elbow,カク; コウ,ひろ.がる; ひろ.げる; ひろ.める
鉱,741,802,mineral,mineral,metal; gold; wide; cave; elbow,コウ,あらがね
弁,742,803,valve,valve,elbow; two hands,ベン; ヘン,わきま.える; わ.ける; はなびら; あらそ.う
雄,743,804,masculine,male,Yamanote; by one’s side; elbow; turkey,ユウ,お-; おす; おん
台,744,805,pedestal,pedestal,elbow; mouth,ダイ; タイ,うてな; われ; つかさ
怠,745,806,neglect,neglect,pedestal; elbow; mouth; heart,タイ,おこた.る; なま.ける
治,746,807,reign,reign,water; water droplets; water pistol; pedestal; elbow; mouth,ジ; チ,おさ.める; おさ.まる; なお.る; なお.す
冶,2137,808,metallurgy,metallurgy,ice; pedestal; elbow; mouth,ヤ,い.る
始,747,809,commence,commence,woman; pedestal; elbow; mouth,シ,はじ.める; -はじ.める; はじ.まる
胎,748,810,womb,womb,moon; month; flesh; part of the body; pedestal; elbow; mouth,タイ,
窓,749,811,window,window,hole; house; human legs; elbow; heart,ソウ; ス,まど; てんまど; けむだし
去,750,812,gone,gone,soil; dirt; ground; elbow,キョ; コ,さ.る; -さ.る
法,751,813,method,method,water; water droplets; water pistol; gone; soil; dirt; ground; elbow,ホウ; ハッ; ホッ; フラン,のり
会,752,814,meeting,meeting,one; wall; umbrella; rising cloud; two; elbow; wall,カイ; エ,あ.う; あ.わせる; あつ.まる
至,753,815,climax,climax,wall; one; ceiling; elbow; soil; dirt; ground,シ,いた.る
室,754,816,room,room,house; climax; wall; one; ceiling; elbow; soil; dirt; ground,シツ,むろ
到,755,817,arrival,arrival,climax; wall; one; ceiling; elbow; soil; dirt; ground; sword; sabre; saber,トウ,いた.る
致,756,818,doth,doth,climax; wall; one; ceiling; elbow; soil; dirt; ground; taskmaster,チ,いた.す
互,757,819,mutually,mutually,one; ceiling; one; floor,ゴ,たが.い; かたみ.に
棄,758,820,abandon,abandon,infant; toddler; top hat; elbow; buckle; tree; wood,キ,す.てる
育,759,821,bring up,bring up,infant; toddler; top hat; elbow; moon; month; flesh; part of the body,イク,そだ.つ; そだ.ち; そだ.てる; はぐく.む
撤,760,822,remove,remove,finger; fingers; borstal; bring up; infant; toddler; top hat; elbow; moon; month; flesh; part of the body; taskmaster,テツ,
充,761,823,allot,allot,infant; toddler; top hat; elbow; human legs,ジュウ,あ.てる; み.たす
銃,762,824,gun,gun,metal; gold; allot; infant; toddler; top hat; elbow; human legs,ジュウ,つつ
硫,763,825,sulfur,sulfur,sulphur; stone; rock; lifebelt; infant; toddler; top hat; elbow; stream; flood,リュウ,
流,764,826,current,current,water; water droplets; water pistol; lifebelt; infant; toddler; top hat; elbow; stream; flood,リュウ; ル,なが.れる; なが.れ; なが.す; -なが.す
允,765,827,license,license,elbow; human legs,イン,じょう; まこと.に; ゆるす
唆,766,828,tempt,tempt,mouth; streetwalker; Ministry of silly walks; John Cleese; license; elbow; human legs; walking legs,サ,そそのか.す
出,767,829,exit,exit,,シュツ; スイ,で.る; -で; だ.す; -だ.す; い.でる; い.だす
山,768,830,mountain,mountain,,サン; セン,やま
拙,769,831,bungling,bungling,finger; fingers; exit,セツ,つたな.い
岩,770,832,boulder,boulder,mountain; stone; rock,ガン,いわ
炭,771,833,charcoal,charcoal,mountain; ashes; cliff; fire,タン,すみ
岐,772,834,branch off,branch off,mountain; branch; ten; needle; crotch,キ; ギ,
峠,773,835,mountain peak,mountain pass,mountain; above; below,,とうげ
崩,774,836,crumble,crumble,mountain; companion; moon; month; flesh; part of the body,ホウ,くず.れる; -くず.れ; くず.す
密,775,837,secrecy,secrecy,house; invariably; heart; mountain,ミツ,ひそ.か
蜜,776,838,honey,honey,house; invariably; heart; insect,ミツ; ビツ,
嵐,777,839,storm,storm,mountain; wind; gnats; drop; insect,ラン,あらし
崎,778,840,promontory,promontory,mountain; strange; large; St. Bernard; can; street; nail; spike; mouth,キ,さき; さい; みさき
崖,2227,841,bluffs,bluffs,mountain; cliff; ivy; square jewel; soil; dirt; ground,ガイ; ゲ; ギ,がけ; きし; はて
入,779,842,enter,enter,,ニュウ; ジュ,い.る; -い.る; -い.り; い.れる; -い.れ; はい.る
込,780,843,crowded,crowded,enter; road,,こ.み; -こ.み; -こ.む; こ.む; こ.める
分,781,844,part,part,eight; sword; dagger,ブン; フン; ブ,わ.ける; わ.け; わ.かれる; わ.かる; わ.かつ
貧,782,845,poverty,poverty,part; eight; sword; dagger; shellfish; clam; oyster; eye; animal legs; eight,ヒン; ビン,まず.しい
頒,783,846,partition,partition,part; eight; sword; dagger; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ハン,わか.つ
公,784,847,public,public,eight; elbow,コウ; ク,おおやけ
松,785,848,pine tree,pine tree,tree; wood; public; eight; elbows,ショウ,まつ
翁,786,849,venerable old man,venerable old man,public; eight; elbows; feathers; wings,オウ,おきな
訟,787,850,sue,sue,say; words; keitai; mouth; public; eight; elbows,ショウ,
谷,788,851,valley,valley,eight; umbrella; mouth,コク,たに; きわ.まる
浴,789,852,bathe,bathe,water; water droplets; water pistol; valley; eight; umbrella; mouth,ヨク,あ.びる; あ.びせる
容,790,853,contain,contain,house; valley; eight; umbrella; mouth,ヨウ,い.れる
溶,791,854,melt,melt,water; water droplets; water pistol; contents; contain; house; valley; animal legs; eight; umbrella; mouth,ヨウ,と.ける; と.かす; と.く
欲,792,855,longing,longing,valley; eight; umbrella; mouth; lack; yawn,ヨク,ほっ.する; ほ.しい
裕,793,856,abundant,abundant,cloak; valley; eight; umbrella; mouth,ユウ,
鉛,794,857,lead (metal),lead (metal),lead; metal; gold; gully; eight; mouth,エン,なまり
沿,795,858,run alongside,run alongside,water; water droplets; water pistol; gully; eight; mouth,エン,そ.う; -ぞ.い
賞,796,859,prize,prize,outhouse; small; little; crown; mouth; shellfish; clam; oyster; eye; animal legs; eight,ショウ,ほ.める
党,797,860,party,party,outhouse; small; little; crown; mouth; human legs,トウ,なかま; むら
堂,798,861,public chamber,hall,outhouse; small; little; crown; mouth; soil; dirt; ground,ドウ,
常,799,862,usual,usual,outhouse; small; little; crown; mouth; towel,ジョウ,つね; とこ-
裳,800,863,skirt,skirt,outhouse; small; little; crown; mouth; cloth; clothes; clothing; garment,ショウ,も; もすそ
掌,801,864,manipulate,manipulate,outhouse; small; little; crown; mouth; hand,ショウ,てのひら; たなごころ
皮,802,865,pelt,pelt,branch; ten; needle; crotch; hook,ヒ,かわ; けがわ
波,803,866,waves,waves,water; water droplets; water pistol; pelt; branch; ten; needle; crotch; hook,ハ,なみ
婆,804,867,old woman,old woman,wave; water; water droplets; water pistol; pelt; branch; ten; needle; crotch; hook; woman,バ,ばば; ばあ
披,805,868,expose,expose,finger; fingers; pelt; branch; ten; needle; crotch; hook,ヒ,
破,806,869,rend,rend,stone; rock; pelt; branch; ten; needle; crotch; hook,ハ,やぶ.る; やぶ.れる
被,807,870,incur,incur,cloak; pelt; branch; ten; needle; crotch; hook,ヒ,こうむ.る; おお.う; かぶ.る; かぶ.せる
残,808,871,remainder,remainder,bones; one; ceiling; evening; float,ザン; サン,のこ.る; のこ.す; そこな.う; のこ.り
殉,809,872,martyrdom,martyrdom,bones; one; ceiling; evening; decameron; bound up; sun; day,ジュン,
殊,810,873,particularly,particularly,bones; one; ceiling; evening; vermilion; drop; not yet; one; tree; wood,シュ,こと
殖,811,874,augment,augment,bones; one; ceiling; evening; straightaway; ten; needle; eye; fishhook,ショク,ふ.える; ふ.やす
列,812,875,file,file,bones; one; ceiling; evening; sword; sabre; saber,レツ; レ,
裂,813,876,split,split,file; bones; one; ceiling; evening; sword; sabre; saber; cloth; clothes; clothing; garment,レツ,さ.く; さ.ける; -ぎ.れ
烈,814,877,ardent,ardent,file; bones; one; ceiling; evening; sword; sabre; saber; oven-fire; barbecue,レツ,はげ.しい
死,815,878,death,death,bones; one; ceiling; evening; spoon; sitting on the ground,シ,し.ぬ; し.に-
葬,816,879,interment,interment,flowers; death; bones; one; ceiling; evening; spoon; sitting on the ground; two hands,ソウ,ほうむ.る
瞬,817,880,wink,wink,eye; Rose of Sharon; birdhouse; birdcage; claw; vulture; crown; sunglasses; dancing legs; ballerina; evening,シュン,またた.く; まじろ.ぐ
耳,818,881,ear,ear,,ジ,みみ
取,819,882,take,take,ear; crotch,シュ,と.る; と.り; と.り-; とり; -ど.り
趣,820,883,gist,gist,run; soil; dirt; ground; mend; take; ear; crotch,シュ,おもむき; おもむ.く
最,821,884,utmost,utmost,sun; day; take; ear; crotch,サイ; シュ,もっと.も; つま
撮,822,885,snapshot,snapshot,finger; fingers; utmost; sun; day; take; ear; crotch,サツ,と.る; つま.む; -ど.り
恥,823,886,shame,shame,ear; heart,チ,は.じる; はじ; は.じらう; は.ずかしい
職,824,887,post,post,ear; kazoo; sound; vase; stand up; sun; day; fiesta,ショク; ソク,
聖,825,888,holy,holy,ear; mouth; king; jewel; ball,セイ; ショウ,ひじり
敢,826,889,daring,daring,street; nail; spike; ear; taskmaster,カン,あ.えて; あ.えない; あ.えず
聴,827,890,listen,listen,ear; stethoscope; camel; ten; needle; eye; cross-eyed; net; heart,チョウ; テイ,き.く; ゆる.す
懐,828,891,pocket,pocket,Freud; state of mind; poltergeist; BernaE; ten; needle; eye; cross-eyed; net; top hat; scarf; cloth; clothes; clothing; garment,カイ; エ,ふところ; なつ.かしい; なつ.かしむ; なつ.く; なつ.ける; なず.ける; いだ.く; おも.う
慢,829,892,ridicule,ridicule,Freud; state of mind; mandala; sun; day; eye; cross-eyed; net; crotch,マン,
漫,830,893,loose,loose,water; water droplets; water pistol; mandala; sun; day; eye; cross-eyed; net; crotch,マン,みがりに
買,831,894,buy,buy,eye; cross-eyed; net; shellfish; clam; oyster; eye; animal legs; eight,バイ,か.う
置,832,895,placement,placement,eye; cross-eyed; net; straightaway; ten; needle; eye; fishhook,チ,お.く; -お.き
罰,833,896,penalty,penalty,eye; cross-eyed; net; say; words; keitai; mouth; sword; sabre; saber,バツ; バチ; ハツ,ばっ.する
寧,834,897,rather,rather,house; heart; eye; cross-eyed; net; street; nail; spike,ネイ,むし.ろ
濁,835,898,voiced,voiced,water; water droplets; water pistol; spider; eye; cross-eyed; net; bound up; insect,ダク; ジョク,にご.る; にご.す
環,836,899,ring,ring,king; jewel; ball; trampoline; eye; cross-eyed; net; one; ceiling; mouth; scarf,カン,わ
還,837,900,send back,send back,trampoline; eye; cross-eyed; net; one; ceiling; mouth; scarf; road,カン,かえ.る
夫,838,901,husband,husband,one; large,フ; フウ; ブ,おっと; そ.れ
扶,839,902,aid,aid,finger; fingers; husband,フ,たす.ける
渓,840,903,mountain stream,mountain stream,water; water droplets; water pistol; claw; vulture; husband,ケイ,たに; たにがわ
規,841,904,standard,standard,husband; see; telescope; eye; human legs,キ,
替,842,905,exchange,exchange,husband; sun; day; tongue wagging,タイ,か.える; か.え-; か.わる
賛,843,906,approve,approve,husband; shellfish; clam; oyster; eye; animal legs; eight,サン,たす.ける; たた.える
潜,844,907,submerge,submerge,water; water droplets; water pistol; exchange; husband; sun; day; tongue wagging,セン,ひそ.む; もぐ.る; かく.れる; くぐ.る; ひそ.める
失,845,908,lose,lose,drop; husband,シツ,うしな.う; う.せる
鉄,846,909,iron,iron,metal; gold; lose; drop; husband,テツ,くろがね
迭,847,910,alternate,alternate,transfer; lose; drop; husband; road,テツ,
臣,848,911,retainer,retainer,slave,シン; ジン,
姫,849,912,princess,princess,woman; retainer; slave,キ,ひめ; ひめ-
蔵,850,913,storehouse,storehouse,flowers; parade; retainer; slave,ゾウ; ソウ,くら; おさ.める; かく.れる
臓,851,914,entrails,entrails,moon; month; flesh; part of the body; storehouse; flowers; parade; retainer; slave,ゾウ,はらわた
賢,852,915,intelligent,intelligent,loincloth; retainer; slave; crotch; shellfish; clam; oyster; eye; animal legs; eight,ケン,かしこ.い
腎,2453,916,kidney,kidney,loincloth; retainer; slave; crotch; moon; month; flesh; part of the body,ジン,
堅,853,917,strict,strict,loincloth; retainer; slave; crotch; soil; dirt; ground,ケン,かた.い; -がた.い
臨,854,918,look to,look to,retainer; slave; reclining; lying down; goods; mouth,リン,のぞ.む
覧,855,919,perusal,perusal,retainer; slave; reclining; lying down; one; floor; look; see; telescope; eye; human legs,ラン,み.る
巨,856,920,gigantic,gigantic,Fafner,キョ,
拒,857,921,repel,repel,finger; fingers; gigantic; Fafner,キョ; ゴ,こば.む
力,858,922,power,power,muscle; arnold,リョク; リキ; リイ,ちから
男,859,923,male,man,rice field; brains; power; muscle; arnold,ダン; ナン,おとこ; お
労,860,924,labor,labor,schoolhouse; owl; crown; power; muscle; arnold,ロウ,ろう.する; いたわ.る; いた.ずき; ねぎら; つか.れる; ねぎら.う
募,861,925,recruit,recruit,graveyard; flowers; sun; day; large; St. Bernard; power; muscle; arnold,ボ,つの.る
劣,862,926,inferiority,inferiority,few; power; muscle; arnold,レツ,おと.る
功,863,927,achievement,achievement,craft; powered; power; muscle; arnold,コウ; ク,いさお
勧,864,928,persuade,persuade,pegasus; horse; pantomime horse; noon; sign of the horse; turkey; power; muscle; arnold,カン; ケン,すす.める
努,865,929,toil,toil,guy; woman; crotch; power; muscle; arnold,ド,つと.める
勃,2858,930,erection,uprising,bishop; cross; ten; needle; crown; child; power; muscle; arnold,ボツ; ホツ,おこ.る; にわかに
励,866,931,encourage,encourage,Wimbledon; cliff; ten thousand; power; muscle; arnold,レイ,はげ.む; はげ.ます
加,867,932,add,add,power; muscle; arnold; mouth,カ,くわ.える; くわ.わる
賀,868,933,congratulations,congratulations,add; power; muscle; arnold; mouth; shellfish; clam; oyster; eye; animal legs; eight,ガ,
架,869,934,erect,erect,add; power; muscle; arnold; mouth; tree; wood,カ,か.ける; か.かる
脇,870,935,armpit,armpit,moon; month; flesh; part of the body; triceps; power; muscle; arnold,キョウ,わき; わけ
脅,871,936,threaten,threaten,triceps; power; muscle; arnold; moon; month; flesh; part of the body,キョウ,おびや.かす; おど.す; おど.かす
協,872,937,co-,co-,ten; needle; triceps; power; muscle; arnold,キョウ,
行,873,938,going,going,boulevard,コウ; ギョウ; アン,い.く; ゆ.く; -ゆ.き; -ゆき; -い.き; -いき; おこな.う; おこ.なう
律,874,939,rhythm,rhythm,Nelson; column; going; line; brush,リツ; リチ; レツ,
復,875,940,restore,restore,Nelson; column; going; line; fold back; double back; reclining; lying down; sun; day; walking legs,フク,また
得,876,941,gain,gain,Nelson; column; going; line; bill posters; nightbreak; sun; day; one; floor; glue,トク,え.る; う.る
従,877,942,accompany,accompany,Nelson; column; going; line; horns; mend,ジュウ; ショウ; ジュ,したが.う; したが.える; より
徒,878,943,junior,junior,Nelson; column; going; line; run; soil; dirt; ground; mend,ト,いたずら; あだ
待,879,944,wait,wait,Nelson; column; going; line; Buddhist temple; soil; dirt; ground; glue,タイ,ま.つ; -ま.ち
往,880,945,journey,journey,Nelson; column; going; line; candlestick; lord; drop; king; jewel; ball,オウ,い.く; いにしえ; さき.に; ゆ.く
征,881,946,subjugate,subjugate,Nelson; column; going; line; correct; one; ceiling; stop; footprint,セイ,
径,882,947,diameter,diameter,Nelson; column; going; line; spool; clod; toilet paper; crotch; soil; dirt; ground,ケイ,みち; こみち; さしわたし; ただちに
彼,883,948,he,he,Nelson; column; going; line; pelt; branch; ten; needle; crotch; hook,ヒ,かれ; かの; か.の
役,884,949,duty,duty,Nelson; column; going; line; cruise missile; missile; wind; crotch,ヤク; エキ,
徳,885,950,benevolence,benevolence,Nelson; column; going; line; stethoscope; camel; ten; needle; eye; cross-eyed; net; heart,トク,
徹,886,951,penetrate,penetrate,Nelson; column; going; line; borstal; bring up; infant; toddler; top hat; elbow; moon; month; flesh; part of the body; taskmaster,テツ,
徴,887,952,indications,indications,sherpa; Nelson; column; going; line; mountain; king; jewel; ball; taskmaster,チョウ; チ,しるし
懲,888,953,penal,penal,indications; sherpa; Nelson; column; going; line; mountain; king; jewel; ball; taskmaster; heart,チョウ,こ.りる; こ.らす; こ.らしめる
微,889,954,delicate,delicate,sherpa; Nelson; column; going; line; mountain; one; ceiling; human legs; taskmaster,ビ,かす.か
街,890,955,boulevard,boulevard,going; ivy; square jewel; soil; dirt; ground,ガイ; カイ,まち
桁,2483,956,girder,girder,tree; wood; going,コウ,けた
衡,891,957,equilibrium,equilibrium,boulevard; going; bound up; rice field; brains; large; St. Bernard,コウ,
稿,892,958,draft,draft,wheat; cereal; tall; top hat; mouth; hood; mouth,コウ,わら; したがき
稼,893,959,earnings,earnings,wheat; cereal; house; sow; pig,カ,かせ.ぐ
程,894,960,extent,extent,wheat; cereal; display; mouth; king; jewel; ball,テイ,ほど; -ほど
税,895,961,tax,tax,wheat; cereal; devil; horns; elder brother; teenager; mouth; human legs,ゼイ,
稚,896,962,immature,immature,wheat; cereal; turkey,チ; ジ,いとけない; おさない; おくて; おでる
和,897,963,harmony,harmony,wheat; cereal; mouth,ワ; オ; カ,やわ.らぐ; やわ.らげる; なご.む; なご.やか
移,898,964,shift,shift,wheat; cereal; many; evening,イ,うつ.る; うつ.す
秒,899,965,second,second,wheat; cereal; few,ビョウ,
秋,900,966,autumn,autumn,wheat; cereal; fire,シュウ,あき; とき
愁,901,967,distress,distress,autumn; wheat; cereal; fire; heart,シュウ,うれ.える; うれ.い
私,902,968,private,private,wheat; cereal; elbow,シ,わたくし; わたし
秩,903,969,regularity,regularity,wheat; cereal; lose; drop; husband,チツ,
秘,904,970,secret,secret,wheat; cereal; invariably; heart; drop,ヒ,ひ.める; ひそ.か; かく.す
称,905,971,appellation,appellation,wheat; cereal; hammock; reclining; lying down; small; little,ショウ,たた.える; とな.える; あ.げる; かな.う; はか.り; はか.る; ほめ.る
利,906,972,profit,profit,wheat; cereal; sword; sabre; saber,リ,き.く
梨,907,973,pear tree,pear tree,profit; wheat; cereal; sword; sabre; saber; tree; wood,リ,なし
穫,908,974,harvest,harvest,wheat; cereal; radio caroline; flowers; vessels; turkey; crotch,カク,
穂,909,975,ear of a plant,ear of a plant,ear (of a plant); wheat; cereal; favour; favor; ten; needle; rice field; brains; heart,スイ,ほ
稲,910,976,rice plant,rice plant,wheat; cereal; claw; vulture; old days; olden times; stick; sun; day,トウ; テ,いね; いな-
香,911,977,incense,incense,wheat; cereal; sun; day,コウ; キョウ,か; かお.り; かお.る
季,912,978,seasons,seasons,wheat; cereal; child,キ,
委,913,979,committee,committee,wheat; cereal; woman,イ,ゆだ.ねる
秀,914,980,excel,excel,wheat; cereal; fist; from,シュウ,ひい.でる
透,915,981,transparent,transparent,excel; wheat; cereal; fist; from; road,トウ,す.く; す.かす; す.ける; とう.る; とう.す
誘,916,982,entice,entice,say; words; keitai; mouth; excel; wheat; cereal; fist; from,ユウ; イウ,さそ.う; いざな.う
稽,2088,983,training,training,wheat; cereal; understandably; chihuahua with one human leg; delicious; spoon; sitting on the ground; sun; day,ケイ,かんが.える; とど.める
穀,917,984,cereals,cereals,samurai; crown; wheat; cereal; cruise missile; missile; wind; crotch,コク,
菌,918,985,germ,germ,flowers; pent in; wheat; cereal,キン,
萎,2355,986,numb,numb,flowers; committee; wheat; cereal; woman,イ,な; しお.れる; しな.びる; しぼ.む; な.える
米,919,987,rice,rice,,ベイ; マイ; メエトル,こめ; よね
粉,920,988,flour,flour,rice; part; eight; sword; dagger,フン; デシメートル,こ; こな
粘,921,989,sticky,sticky,rice; fortune-telling; magic wand; augury; mouth,ネン,ねば.る
粒,922,990,grains,grains,rice; vase; stand up,リュウ,つぶ
粧,923,991,cosmetics,cosmetics,rice; shire; cave; soil; dirt; ground,ショウ,
迷,924,992,astray,astray,rice; road,メイ,まよ.う
粋,925,993,chic,chic,rice; ninety; nine; baseball; ten; needle,スイ,いき
謎,2709,994,riddle,riddle,say; words; keitai; mouth; astray; rice; road,メイ; ベイ,なぞ
糧,926,995,provisions,provisions,rice; quantity; nightbreak; sun; day; one; floor; computer,リョウ; ロウ,かて
菊,927,996,chrysanthemum,chrysanthemum,flowers; rice cooker; bound up; rice,キク,
奥,928,997,core,core,drop; pent in; rice; large; St. Bernard,オウ; オク,おく.まる; くま
数,929,998,number,number,rice; woman; taskmaster,スウ; ス; サク; ソク; シュ,かず; かぞ.える; しばしば; せ.める; わずらわ.しい
楼,930,999,watchtower,watchtower,tree; wood; rice; woman,ロウ,たかどの
類,931,1000,sort,sort,rice; large; St. Bernard; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ルイ,たぐ.い
漆,932,1001,lacquer,lacquer,water; water droplets; water pistol; tree; wood; umbrella; grains of rice,シツ,うるし
膝,2461,1002,knee,knee,moon; month; flesh; part of the body; tree; wood; umbrella; grains of rice,シツ,ひざ
様,933,1003,Esq.,Esq.,tree; wood; sheep; grains of rice,ヨウ; ショウ,さま; さん
求,934,1004,request,request,arrow; grains of rice,キュウ; グ,もと.める
球,935,1005,ball,ball,king; jewel; request; arrow; grains of rice,キュウ,たま
救,936,1006,salvation,salvation,request; arrow; grains of rice; taskmaster,キュウ,すく.う
竹,937,1007,bamboo,bamboo,,チク,たけ
笑,938,1008,laugh,laugh,bamboo; heavens,ショウ,わら.う; え.む
笠,939,1009,bamboo hat,bamboo hat,bamboo; vase; stand up,リュウ,かさ
笹,940,1010,bamboo grass,bamboo grass,bamboo; generation,,ささ
箋,2991,1011,stationary,stationery,,,
筋,941,1012,muscle,muscle,bamboo; moon; month; flesh; part of the body; power; arnold,キン,すじ
箱,942,1013,box,box,bamboo; inter; Inter Milan; tree; wood; eye,ソウ,はこ
筆,943,1014,writing brush,writing brush,bamboo; brush,ヒツ,ふで
筒,944,1015,cylinder,cylinder,bamboo; same; monks; hood; one; mouth,トウ,つつ
等,945,1016,etc.,etc.,bamboo; Buddhist temple; soil; dirt; ground; glue,トウ,ひと.しい; など; -ら
算,946,1017,calculate,calculate,bamboo; eye; two hands,サン,そろ
答,947,1018,solution,solution,bamboo; fit; meeting; umbrella; one; mouth,トウ,こた.える; こた.え
策,948,1019,scheme,scheme,bamboo; tree; wood; belt,サク,
簿,949,1020,register,register,bamboo; water; water droplets; water pistol; acupuncturist; specialty; drop; ten; needle; rice field; brains; glue,ボ,
築,950,1021,fabricate,fabricate,bamboo; barge; craft; mediocre; wind; drop; tree; wood,チク,きず.く
篭,2638,1022,cage,basket,,,
人,951,1023,person,person,,ジン; ニン,ひと; -り; -と
佐,952,1024,assistant,assistant,person; left; by one’s side; craft,サ,
侶,2121,1025,partner,partner,person; spine; mouth; drop; mouth,リョ; ロ,とも
但,953,1026,however,however,person; nightbreak; sun; day; one; floor,タン,ただ.し
住,954,1027,dwell,dwell,person; candlestick; lord; drop; king; jewel; ball,ジュウ; ヂュウ; チュウ,す.む; す.まう; -ず.まい
位,955,1028,rank,rank,person; vase; stand up,イ,くらい; ぐらい
仲,956,1029,go-between,go-between,person; in; stick; mouth,チュウ,なか
体,957,1030,body,body,person; origin; book; tree; wood; one,タイ; テイ,からだ; かたち
悠,958,1031,remote,remote,permanence; person; stick; fred astaire; taskmaster; heart,ユウ,
件,959,1032,affair,affair,person; cow,ケン,くだん
仕,960,1033,attend,attend,person; samurai,シ; ジ,つか.える
他,961,1034,other,other,person; scorpion,タ,ほか
伏,962,1035,prostrated,prostrated,person; chihuahua; dog; large; drop,フク,ふ.せる; ふ.す
伝,963,1036,transmit,transmit,person; rising cloud; two; elbow; wall,デン; テン,つた.わる; つた.える; つた.う; つだ.う; -づた.い; つて
仏,964,1037,Buddha,Buddha,buddha; person; elbow,ブツ; フツ,ほとけ
休,965,1038,rest,rest,person; tree; wood,キュウ,やす.む; やす.まる; やす.める
仮,966,1039,provisional,provisional,sham; person; anti-; demonstration; cliff; crotch,カ; ケ,かり; かり-
伎,2122,1040,performing artist,performing artist,person; branch; ten; needle; crotch,ギ; キ,わざ; わざおぎ
伯,967,1041,chief,chief,person; white; dove,ハク,
俗,968,1042,vulgar,vulgar,person; valley; eight; umbrella; mouth,ゾク,
信,969,1043,faith,faith,person; say; words; keitai; mouth,シン,
佳,970,1044,excellent,excellent,person; ivy; square jewel; soil; dirt; ground,カ,
依,971,1045,reliant,reliant,person; cloth; clothes; clothing; garment,イ; エ,よ.る
例,972,1046,example,example,person; file; bones; one; ceiling; evening; sword; sabre; saber,レイ,たと.える
個,973,1047,individual,individual,person; harden; pent in; old; tombstone; gravestone; church; ten; needle; mouth,コ; カ,
健,974,1048,healthy,healthy,person; build; brush; stretch,ケン,すこ.やか
側,975,1049,side,side,person; rule; shellfish; clam; oyster; eye; animal legs; eight; sword; sabre; saber,ソク,かわ; がわ; そば
侍,976,1050,waiter,waiter,person; Buddhist temple; soil; dirt; ground; glue,ジ; シ,さむらい; はべ.る
停,977,1051,halt,halt,person; pavilion; tall; top hat; mouth; crown; street; nail; spike,テイ,と.める; と.まる
値,978,1052,price,price,person; straightaway; ten; needle; eye; fishhook,チ,ね; あたい
倣,979,1053,emulate,emulate,person; set free; compass; direction; taskmaster,ホウ,なら.う
傲,3018,1054,arrogance,arrogance,,ゴウ,あなど.る; おご.る
倒,980,1055,overthrow,overthrow,person; arrival; climax; wall; one; ceiling; elbow; soil; dirt; ground; sword; sabre; saber,トウ,たお.れる; -だお.れ; たお.す
偵,981,1056,spy,spy,person; upright; magic wand; augury; shellfish; clam; oyster; eye; animal legs; eight,テイ,
僧,982,1057,Buddhist priest,Buddhist priest,buddhist priest; person; increase; formerly; horns; rice field; brains; sun; day,ソウ,
億,983,1058,hundred million,hundred million,person; idea; sound; vase; stand up; sun; day; heart,オク,
儀,984,1059,ceremony,ceremony,person; righteousness; sheep; ego; hand; fiesta,ギ,
償,985,1060,reparation,reparation,person; prize; outhouse; small; little; crown; mouth; shellfish; clam; oyster; eye; animal legs; eight,ショウ,つぐな.う
仙,986,1061,hermit,hermit,person; mountain,セン; セント,
催,987,1062,sponsor,sponsor,person; mountain; turkey,サイ,もよう.す; もよお.す
仁,988,1063,humanity,humanity,person; two,ジン; ニ; ニン,
侮,989,1064,scorn,scorn,person; every; reclining; lying down; mother; breasts,ブ,あなど.る; あなず.る
使,990,1065,use,use,person; history; length; stick; mouth; tucked under the arm,シ,つか.う; つか.い; -つか.い; -づか.い
便,991,1066,convenience,convenience,person; grow late; Ameratasu; one; ceiling; sun; tucked under the arm,ベン; ビン,たよ.り
倍,992,1067,double,double,person; muzzle; vase; stand up; mouth,バイ,
優,993,1068,tenderness,tenderness,person; melancholy; summer; head; page; crown; heart; walking legs,ユウ; ウ,やさ.しい; すぐ.れる; まさ.る
伐,994,1069,fell,fell,person; fiesta,バツ; ハツ; カ; ボチ,き.る; そむ.く; う.つ
宿,995,1070,inn,inn,house; person; hundred; one; ceiling; white; dove,シュク,やど; やど.る; やど.す
傷,996,1071,wound,wound,person; reclining; lying down; piggy bank; sun; day; piglets,ショウ,きず; いた.む; いた.める
保,997,1072,protect,protect,person; dumbfounded; mouth; tree; wood,ホ; ホウ,たも.つ
褒,998,1073,praise,praise,top hat; protect; person; dumbfounded; mouth; tree; wood; scarf,ホウ,ほ.める
傑,999,1074,greatness,greatness,person; sunglasses; dancing legs; ballerina; evening; tree; wood,ケツ,すぐ.れる
付,1000,1075,adhere,adhere,person; glue,フ,つ.ける; -つ.ける; -づ.ける; つ.け; つ.け-; -つ.け; -づ.け; -づけ; つ.く; -づ.く; つ.き; -つ.き; -つき; -づ.き; -づき
符,1001,1076,token,token,bamboo; adhere; sellotape; person; glue,フ,
府,1002,1077,municipality,municipality,borough; cave; adhere; sellotape; person; glue,フ,
任,1003,1078,responsibility,responsibility,person; porter; drop; samurai,ニン,まか.せる; まか.す
賃,1004,1079,fare,fare,responsibility; person; porter; drop; samurai; shellfish; clam; oyster; eye; animal legs; eight,チン,
代,1005,1080,substitute,substitute,person; arrow,ダイ; タイ,か.わる; かわ.る; かわ.り; -がわ.り; か.える; よ; しろ
袋,1006,1081,sack,sack,substitute; person; arrow; garment,タイ; ダイ,ふくろ
貸,1007,1082,lend,lend,substitute; person; arrow; shellfish; clam; oyster; eye; animal legs; eight,タイ,か.す; か.し-; かし-
化,1008,1083,change,change,person; spoon; sitting on the ground,カ; ケ,ば.ける; ば.かす; ふ.ける; け.する
花,1009,1084,flower,flower,flowers; change; person; spoon; sitting on the ground,カ; ケ,はな
貨,1010,1085,freight,freight,change; person; spoon; sitting on the ground; shellfish; clam; oyster; eye; animal legs; eight,カ,たから
傾,1011,1086,lean,lean,change; person; about that time; spoon; sitting on the ground; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ケイ,かたむ.く; かたむ.ける; かたぶ.く; かた.げる; かし.げる
何,1012,1087,what,what,person; can; mouth; street; nail; spike,カ,なに; なん; なに-; なん-
荷,1013,1088,baggage,baggage,flowers; what; person; can; mouth; street; nail; spike,カ,に
俊,1014,1089,sagacious,sagacious,person; streetwalker; Ministry of silly walks; John Cleese; license; elbow; human legs; walking legs,シュン,
傍,1015,1090,bystander,bystander,person; traffic cop; fez; vase; stand up; crown; compass; direction,ボウ,かたわ.ら; わき; おか-; はた; そば
俺,2058,1091,myself,myself,person; dachshund; large; St. Bernard; eel; sun; day,エン,おれ; われ
久,1016,1092,long time,long time,bound up; person; mummy,キュウ; ク,ひさ.しい
畝,1017,1093,furrow,furrow,top hat; rice field; brains; long time; mummy; bound up; person,ボウ; ホ; モ; ム,せ; うね
囚,1018,1094,captured,captured,pent in; person,シュウ,とら.われる
内,1019,1095,inside,inside,person; belt,ナイ; ダイ,うち
丙,1020,1096,third class,third class,one; ceiling; inside; person; belt,ヘイ,ひのえ
柄,1021,1097,design,design,tree; wood; third class; one; ceiling; inside; person; belt,ヘイ,がら; え; つか
肉,1022,1098,meat,meat,person; inside; belt; person,ニク,しし
腐,1023,1099,rot,rot,borough; municipality; cave; adhere; sellotape; person; glue; meat; inside; belt; person,フ,くさ.る; -くさ.る; くさ.れる; くさ.れ; くさ.らす; くさ.す
座,1024,1100,sit,sit,squat; cave; shire; assembly line; person; soil; dirt; ground,ザ,すわ.る
挫,2845,1101,sprain,sprain,finger; fingers; sitting in meditation; assembly line; person; soil; dirt; ground,ザ; サ,くじ.く; くじ.ける
卒,1025,1102,graduate,graduate,top hat; assembly line; person; ten; needle,ソツ; シュツ,そっ.する; お.える; お.わる; ついに; にわか
傘,1026,1103,umbrella,umbrella,assembly line; person; ten; needle,サン,かさ
匁,1027,1104,monme,monme,bound up; tucked under the arm,,もんめ; め
以,1028,1105,by means of,by means of,plow; drop; person,イ,もっ.て
似,1029,1106,similar,similar,becoming; person; by means of; plow; drop; person,ジ,に.る; ひ.る
併,1030,1107,join,join,person; puzzle; horns; two hands,ヘイ,あわ.せる
瓦,1031,1108,tile,tile,one; ceiling; cane; stick; drop; fishhook; ice,ガ,かわら; ぐらむ
瓶,1032,1109,flower pot,flower pot,puzzle; horns; two hands; tile; one; ceiling; cane; stick; drop; fishhook; ice,ビン,かめ
宮,1033,1110,Shinto shrine,Shinto shrine,shinto shrine; house; spine; mouth; drop,キュウ; グウ; ク; クウ,みや
営,1034,1111,occupation,occupation,schoolhouse; owl; crown; spine; mouth; drop,エイ,いとな.む; いとな.み
善,1035,1112,virtuous,virtuous,sheep; horns; mouth,ゼン,よ.い; い.い; よ.く; よし.とする
膳,2468,1113,dining tray,dining tray,moon; month; flesh; part of the body; virtuous; sheep; horns; mouth,ゼン; セン,かしわ; すす.める; そな.える
年,1036,1114,year,year,sign of the horse; sunglasses,ネン,とし
夜,1037,1115,night,night,top hat; person; walking legs; drop,ヤ,よ; よる
液,1038,1116,fluid,fluid,water; water droplets; water pistol; night; top hat; person; walking legs; drop,エキ,
塚,1039,1117,hillock,hillock,soil; dirt; ground; crown; pig; sow,チョウ,つか; -づか
幣,1040,1118,cash,cash,shredder; small; little; belt; taskmaster; towel,ヘイ,ぬさ
蔽,2358,1119,cover over,cover over,flowers; shredder; small; little; belt; taskmaster,ヘイ; ヘツ; フツ,おお.う; おお.い
弊,1041,1120,abuse,abuse,shredder; small; little; belt; taskmaster; two hands,ヘイ,
喚,1042,1121,yell,yell,mouth; bound up; four; large; St. Bernard,カン,わめ.く
換,1043,1122,interchange,interchange,finger; fingers; bound up; four; large; St. Bernard,カン,か.える; -か.える; か.わる
融,1044,1123,dissolve,dissolve,tripod; one; ceiling; mouth; hood; human legs; street; nail; spike; insect,ユウ,と.ける; と.かす
施,1045,1124,alms,alms,banner; direction; compass; direction; reclining; lying down; scorpion,シ; セ,ほどこ.す
旋,1046,1125,rotation,rotation,banner; direction; compass; direction; reclining; lying down; zoo; critters,セン,
遊,1047,1126,play,play,banner; direction; compass; direction; reclining; lying down; child; road,ユウ; ユ,あそ.ぶ; あそ.ばす
旅,1048,1127,trip,trip,banner; direction; compass; direction; reclining; lying down; Carol in rags; person; rag,リョ,たび
勿,1049,1128,not,not,knot; piglet’s tail,モチ; ブツ; ボツ,なか.れ; なし
物,1050,1129,thing,thing,cow; knot; piglet’s tail,ブツ; モツ,もの; もの-
易,1051,1130,easy,easy,sun; day; knot; piglet’s tail,エキ; イ,やさ.しい; やす.い
賜,1052,1131,grant,grant,shellfish; clam; oyster; eye; animal legs; eight; easy; sun; day; knot; piglet’s tail,シ,たまわ.る; たま.う; たも.う
尿,1053,1132,urine,urine,flag; water,ニョウ,
尼,1054,1133,nun,nun,flag; spoon; sitting on the ground,ニ,あま
尻,2220,1134,buttocks,buttocks,flag; nine; baseball,コウ,しり
泥,1055,1135,mud,mud,water; water droplets; water pistol; nun; flag; spoon; sitting on the ground,デイ; ナイ; デ; ニ,どろ
塀,1056,1136,fence,fence,soil; dirt; ground; folding screen; flag; puzzle; horns; two hands,ヘイ; ベイ,
履,1057,1137,footgear,footgear,flag; restore; Nelson; column; going; line; fold back; double back; reclining; lying down; sun; day; walking legs,リ,は.く
屋,1058,1138,roof,roof,flag; climax; wall; one; ceiling; elbow; soil; dirt; ground,オク,や
握,1059,1139,grip,grip,finger; fingers; roof; flag climax; wall; one; ceiling; elbow; soil; dirt; ground,アク,にぎ.る
屈,1060,1140,yield,yield,flag; exit,クツ,かが.む; かが.める
掘,1061,1141,dig,dig,finger; fingers; yield; flag; exit,クツ,ほ.る
堀,1062,1142,ditch,ditch,moat; soil; dirt; ground; yield; flag; exit,クツ,ほり
居,1063,1143,reside,reside,flag; old; tombstone; gravestone; church; ten; needle; mouth,キョ; コ,い.る; -い; お.る
据,1064,1144,set,set,finger; fingers; reside; flag; old; tombstone; gravestone; church; ten; needle; mouth,キョ,す.える; す.わる
裾,2624,1145,hem,hem,cloak; reside; flag; old; tombstone; gravestone; church; ten; needle; mouth,キョ; コ,すそ
層,1065,1146,stratum,stratum,flag; increase; formerly; horns; rice field; brains; sun; day,ソウ,
局,1066,1147,bureau,bureau,flag; phrase; bound up; mouth,キョク,つぼね
遅,1067,1148,slow,slow,flag; sheep; road,チ,おく.れる; おく.らす; おそ.い
漏,1068,1149,leak,leak,water; water droplets; water pistol; flag; rain; weather,ロウ,も.る; も.れる; も.らす
刷,1069,1150,printing,printing,flag; towel; sword; sabre; saber,サツ,す.る; -ず.り; -ずり; は.く
尺,1070,1151,shaku,shaku,flag; stick,シャク,
尽,1071,1152,exhaust,exhaust,shaku-hachi; flag; stick; ice,ジン; サン,つ.くす; -つ.くす; -づ.くし; -つ.く; -づ.く; -ず.く; つ.きる; つ.かす; さかづき; ことごと.く; つか; つき
沢,1072,1153,swamp,swamp,water; water droplets; water pistol; shaku-hachi; flag; stick,タク,さわ; うるお.い; うるお.す; つや
訳,1073,1154,translate,translate,say; words; keitai; mouth; shaku-hachi; flag; stick,ヤク,わけ
択,1074,1155,choose,choose,finger; fingers; shaku-hachi; flag; stick,タク,えら.ぶ
昼,1075,1156,daytime,daytime,shaku-hachi; flag; stick; nightbreak; sun; day; one; floor,チュウ,ひる
戸,1076,1157,door,door,one; flag,コ,と
肩,1077,1158,shoulder,shoulder,door; one; ceiling; flag; moon; month; flesh; part of the body,ケン,かた
房,1078,1159,tassel,tassel,door; one; ceiling; flag; compass; direction,ボウ,ふさ
扇,1079,1160,fan,fan,door; one; ceiling; flag; feathers; wings,セン,おうぎ
炉,1080,1161,hearth,hearth,hearth-fire; door; one; ceiling; flag,ロ,いろり
戻,1081,1162,re-,re-,door; one; ceiling; flag; large; St. Bernard,レイ,もど.す; もど.る
涙,1082,1163,tears,tears,water; water droplets; water pistol; re-; door; one; ceiling; flag; large; St. Bernard,ルイ; レイ,なみだ
雇,1083,1164,employ,employ,door; one; ceiling; flag; turkey,コ,やと.う
顧,1084,1165,look back,look back,employ; door; one; ceiling; flag; turkey; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,コ,かえり.みる
啓,1085,1166,disclose,disclose,bouncer; door; one; ceiling; flag; taskmaster; mouth,ケイ,ひら.く; さと.す
示,1086,1167,show,show,altar; two; small,ジ; シ,しめ.す
礼,1087,1168,salutation,salutation,salute; altar; fishhook,レイ; ライ,
祥,1088,1169,auspicious,auspicious,altar; sheep,ショウ,さいわ.い; きざ.し; よ.い; つまび.らか
祝,1089,1170,celebrate,celebrate,altar; elder brother; teenager; mouth; human legs,シュク; シュウ,いわ.う
福,1090,1171,blessing,blessing,altar; wealth; one; ceiling; mouth; rice field; brains,フク,
祉,1091,1172,welfare,welfare,altar; stop; footprint,シ,
社,1092,1173,company,company,altar; soil; dirt; ground,シャ,やしろ
視,1093,1174,inspection,inspection,altar; see; telescope; eye; human legs,シ,み.る
奈,1094,1175,Nara,Nara,nara; large; St. Bernard; altar; show; two; small,ナ; ナイ; ダイ,いかん; からなし
尉,1095,1176,military officer,military officer,flag; altar; show; two; small; glue,イ; ジョウ,
慰,1096,1177,consolation,consolation,military officer; flag; altar; show; two; small; glue; heart,イ,なぐさ.める; なぐさ.む
款,1097,1178,goodwill,goodwill,samurai; altar; show; two; small; lack; yawn,カン,
禁,1098,1179,prohibition,prohibition,grove; tree; wood; altar; show; two; small,キン,
襟,1099,1180,collar,collar,cloak; prohibition; grove; tree; wood; altar; show; two; small,キン,えり
宗,1100,1181,religion,religion,house; altar; show; two; small,シュウ; ソウ,むね
崇,1101,1182,adore,adore,mountain; religion; house; altar; show; two; small,スウ,あが.める
祭,1102,1183,ritual,ritual,moon; month; flesh; part of the body; crotch; altar; show; two; small,サイ,まつ.る; まつ.り; まつり
察,1103,1184,guess,guess,house; ritual; moon; month; flesh; part of the body; crotch; altar; show; two; small,サツ,
擦,1104,1185,grate,grate,finger; fingers; guess; house; ritual; moon; month; flesh; part of the body; crotch; altar; show; two; small,サツ,す.る; す.れる; -ず.れ; こす.る; こす.れる
由,1105,1186,wherefore,wherefore,sprout; shoot,ユ; ユウ; ユイ,よし; よ.る
抽,1106,1187,pluck,pluck,finger; fingers; sprout; shoot,チュウ,ひき-
油,1107,1188,oil,oil,water; water droplets; water pistol; sprout; shoot,ユ; ユウ,あぶら
袖,1108,1189,sleeve,sleeve,cloak; sprout; shoot,シュウ,そで
宙,1109,1190,mid-air,mid-air,house; sprout; shoot,チュウ,
届,1110,1191,deliver,deliver,flag; sprout; shoot,カイ,とど.ける; -とど.け; とど.く
笛,1111,1192,flute,flute,bamboo; sprout; shoot,テキ,ふえ
軸,1112,1193,axis,axis,car; sprout; shoot,ジク,
甲,1113,1194,armor,armor,armour; roots,コウ; カン; カ,きのえ
押,1114,1195,push,push,finger; fingers; armour; armor; roots,オウ,お.す; お.し-; お.っ-; お.さえる; おさ.える
岬,1115,1196,headland,headland,mountain; armour; armor; roots,コウ,みさき
挿,1116,1197,insert,insert,finger; fingers; thousand; armour; armor; roots,ソウ,さ.す; はさ.む
申,1117,1198,speaketh,speaketh,monkey; sun; day; stick,シン,もう.す; もう.し-; さる
伸,1118,1199,expand,expand,person; monkey; sun; day; stick,シン,の.びる; の.ばす; の.べる; の.す
神,1119,1200,gods,gods,altar; monkey; sun; day; stick,シン; ジン,かみ; かん-; こう-
捜,1120,1201,search,search,finger; fingers; Buddha’s hand; monkey; sun; day; stick; crotch,ソウ; シュ; シュウ,さが.す
果,1121,1202,fruit,fruit,rice field; brains; tree; wood,カ,は.たす; はた.す; -は.たす; は.てる; -は.てる; は.て
菓,1122,1203,candy,confectionary,flowers; fruit; rice field; brains; tree; wood,カ,
課,1123,1204,chapter,chapter,say; words; keitai; mouth; fruit; rice field; brains; tree; wood,カ,
裸,1124,1205,naked,naked,cloak; fruit; rice field; brains; tree; wood,ラ,はだか
斤,1125,1206,ax,ax,axe,キン,おの
析,1126,1207,chop,chop,tree; wood; axe,セキ,
所,1127,1208,place,place,door; one; ceiling; flag; axe,ショ,ところ; -ところ; どころ; とこ
祈,1128,1209,pray,pray,altar; axe,キ,いの.る
近,1129,1210,near,near,axe; road,キン; コン,ちか.い
折,1130,1211,fold,fold,finger; fingers; axe,セツ,お.る; おり; お.り; -お.り; お.れる
哲,1131,1212,philosophy,philosophy,fold; finger; fingers; axe; mouth,テツ,さとい; あき.らか; し.る; さば.く
逝,1132,1213,departed,departed,fold; finger; fingers; axe; road,セイ,ゆ.く; い.く
誓,1133,1214,vow,vow,fold; finger; fingers; axe; say; words; keitai; mouth,セイ,ちか.う
斬,2092,1215,chop off,chop off,executioner; car; axe,ザン; サン; セン; ゼン,き.る
暫,1134,1216,temporarily,temporarily,executioner; chop off; car; axe; sun; day,ザン,しばら.く
漸,1135,1217,steadily,steadily,water; water droplets; water pistol; executioner; chop off; car; axe,ゼン,やや
断,1136,1218,severance,severance,fishhook; rice; axe,ダン,た.つ; ことわ.る; さだ.める
質,1137,1219,substance,substance,axe; shellfish; clam; oyster; eye; animal legs; eight,シツ; シチ; チ,たち; ただ.す; もと; わりふ
斥,1138,1220,reject,reject,axe; drop,セキ,しりぞ.ける
訴,1139,1221,accusation,accusation,say; words; keitai; mouth; reject; axe; drop,ソ,うった.える
昨,1140,1222,yesterday,yesterday,sun; day; saw,サク,
詐,1141,1223,lie,lie,say; words; keitai; mouth; saw,サ,いつわ.る
作,1142,1224,make,make,person; saw,サク; サ,つく.る; つく.り; -づく.り
雪,1143,1225,snow,snow,rain; weather; broom,セツ,ゆき
録,1144,1226,record,record,metal; gold; dustpan; broom; grains of rice,ロク,
剥,2145,1227,peel off,peel off,,,
尋,1145,1228,inquire,inquire,broom; craft; mouth; glue,ジン,たず.ねる; ひろ
急,1146,1229,hurry,hurry,bound up; broom; heart,キュウ,いそ.ぐ; いそ.ぎ
穏,1147,1230,calm,calm,wheat; cereal; hideaway; claw; vulture; broom; heart,オン,おだ.やか
侵,1148,1231,encroach,encroach,person; French maid; tickle; broom; crown; crotch,シン,おか.す
浸,1149,1232,immersed,immersed,water; water droplets; water pistol; French maid; tickle; broom; crown; crotch,シン,ひた.す; ひた.る
寝,1150,1233,lie down,lie down,house; turtle; French maid; tickle; broom; crown; crotch,シン,ね.る; ね.かす; い.ぬ; みたまや; や.める
婦,1151,1234,lady,lady,woman; feather duster; broom; apron; crown; towel,フ,よめ
掃,1152,1235,sweep,sweep,finger; fingers; feather duster; broom; apron; crown; towel,ソウ; シュ,は.く
当,1153,1236,hit,hit,small; broom,トウ,あ.たる; あ.たり; あ.てる; あ.て; まさ.に; まさ.にべし
彙,2997,1237,glossary,glossary,broken broom; mutual; crown; fruit; rice field; brains; tree; wood; broom*,イ,はりねずみ
争,1154,1238,contend,contend,bound up; rake,ソウ,あらそ.う; いか.でか
浄,1155,1239,clean,clean,water; water droplets; water pistol; contend; bound up; rake,ジョウ; セイ,きよ.める; きよ.い
事,1156,1240,matter,matter,one; ceiling; mouth; rake,ジ; ズ,こと; つか.う; つか.える
唐,1157,1241,T'ang,T'ang,T’ang; cave; rake; mouth,トウ,から
糖,1158,1242,sugar,sugar,rice; T’ang; cave; rake; mouth,トウ,
康,1159,1243,sane,sane,ease; cave; sieve; rake; grains of rice,コウ,
逮,1160,1244,apprehend,apprehend,sieve; rake; grains of rice; road,タイ,
伊,1161,1245,Italy,Italy,italy; person; mop,イ,かれ
君,1162,1246,old boy,old boy,mop; mouth,クン,きみ; -ぎみ
群,1163,1247,flock,flock,old boy; mop; mouth; sheep,グン,む.れる; む.れ; むら; むら.がる
耐,1164,1248,proof,-proof,comb; glue,タイ,た.える
需,1165,1249,demand,demand,rain; weather; comb,ジュ,
儒,1166,1250,Confucian,Confucian,confucian; person; demand; rain; weather; comb,ジュ,
端,1167,1251,edge,edge,vase; stand up; pick-axe; mountain; comb,タン,はし; は; はた; -ばた; はな
両,1168,1252,both,both,street; nail; spike; belt; shovel,リョウ,てる; ふたつ
満,1169,1253,full,full,water; water droplets; water pistol; flowers; both; street; nail; spike; belt; shovel,マン; バン,み.ちる; み.つ; み.たす
画,1170,1254,brush-stroke,brush-stroke,one; ceiling; sprout; shoot; shovel,ガ; カク; エ; カイ,えが.く; かく.する; かぎ.る; はかりごと; はか.る
歯,1171,1255,tooth,tooth,stop; footprint; bag of rice; shovel,シ,よわい; は; よわ.い; よわい.する
曲,1172,1256,bend,bend,rice field; brains; stick,キョク,ま.がる; ま.げる
曹,1173,1257,cadet,cadet,one; bend; sun; day,ソウ; ゾウ,つかさ; ともがら; へや
遭,1174,1258,encounter,encounter,cadet; one; bend; sun; day; road,ソウ,あ.う; あ.わせる
漕,1175,1259,rowing,rowing,water; water droplets; water pistol; cadet; one; bend; sun; day,ソウ,こ.ぐ; はこ.ぶ
槽,1176,1260,vat,vat,tree; wood; cadet; one; bend; sun; day,ソウ,ふね
斗,1177,1261,Big Dipper,Big Dipper,big dipper; measuring cup; big dipper; The Plough; drop; ten; needle,ト; トウ,
料,1178,1262,fee,fee,rice; measuring cup; big dipper; The Plough; drop; ten; needle,リョウ,
科,1179,1263,department,department,wheat; cereal; measuring cup; big dipper; The Plough; drop; ten; needle,カ,
図,1180,1264,map,map,pent in; measuring cup; big dipper; The Plough; drop; ten; needle,ズ; ト,え; はか.る
用,1181,1265,utilize,utilize,moon; month; flesh; part of the body; walking stick,ヨウ,もち.いる
庸,1182,1266,comfortable,comfortable,commonplace; cave; rake; screwdriver; utilise; utilize; moon; month; flesh; part of the body; walking stick,ヨウ,
備,1183,1267,equip,equip,person; flowers; cliff; screwdriver; utilise; utilize; moon; month; flesh; part of the body; walking stick,ビ,そな.える; そな.わる; つぶさ.に
昔,1184,1268,once upon a time,once upon a time,salad; flowers; one; floor; sun; day,セキ; シャク,むかし
錯,1185,1269,confused,confused,metal; gold; once upon a time; storyteller; salad; sun; day,サク; シャク,
借,1186,1270,borrow,borrow,person; once upon a time; storyteller; salad; sun; day,シャク,か.りる
惜,1187,1271,pity,pity,Freud; state of mind; once upon a time; storyteller; salad; sun; day,セキ,お.しい; お.しむ
措,1188,1272,set aside,set aside,finger; fingers; once upon a time; storyteller; salad; sun; day,ソ,お.く
散,1189,1273,scatter,scatter,salad; moon; month; flesh; part of the body; taskmaster,サン,ち.る; ち.らす; -ち.らす; ち.らかす; ち.らかる; ばら
廿,1190,1274,twenty,twenty,,ジュウ; ニュウ,にじゅう
庶,1191,1275,commoner,commoner,caverns; cave; twenty; oven-fire; barbecue,ショ,
遮,1192,1276,intercept,intercept,commoner; caverns; cave; twenty; oven-fire; barbecue; road,シャ,さえぎ.る
席,1193,1277,seat,seat,caverns; cave; twenty; towel,セキ,むしろ
度,1194,1278,degrees,degrees,caverns; cave; twenty; crotch,ド; ト; タク,たび; -た.い
渡,1195,1279,transit,transit,water; water droplets; water pistol; degrees; caverns; cave; twenty; crotch,ト,わた.る; -わた.る; わた.す
奔,1196,1280,bustle,bustle,large; St. Bernard; haystack; ten; needle,ホン,はし.る
噴,1197,1281,erupt,erupt,mouth; pitchfork; haystack; ten; needle; shellfish; clam; oyster; eye; animal legs; eight,フン,ふ.く
墳,1198,1282,tomb,tomb,soil; dirt; ground; pitchfork; haystack; ten; needle; shellfish; clam; oyster; eye; animal legs; eight,フン,
憤,1199,1283,aroused,aroused,Freud; state of mind; pitchfork; haystack; ten; needle; shellfish; clam; oyster; eye; animal legs; eight,フン,いきどお.る
焼,1200,1284,bake,bake,hearth fire; lofty; strawman; wickerman; haystack; ten; needle; one; human legs,ショウ,や.く; や.き; や.き-; -や.き; や.ける
暁,1201,1285,daybreak,daybreak,sun; lofty; strawman; wickerman; haystack; ten; needle; one; human legs,ギョウ; キョウ,あかつき; さと.る
半,1202,1286,half,half,small; ten; needle,ハン,なか.ば
伴,1203,1287,consort,consort,person; half,ハン; バン,ともな.う
畔,1204,1288,paddy ridge,paddy ridge,paddy-ridge; rice field; brains; half,ハン,あぜ; くろ; ほとり
判,1205,1289,judgment,judgment,judgement; half; sword; sabre; saber,ハン; バン,わか.る
拳,2917,1290,fist,fist,quarter; hand,ケン; ゲン,こぶし
券,1206,1291,ticket,ticket,quarter; sword; dagger,ケン,
巻,1207,1292,scroll,scroll,quarter; snake; self,カン; ケン,ま.く; まき; ま.き
圏,1208,1293,sphere,sphere,pent in; scroll; quarter; snake; self,ケン,かこ.い
勝,1209,1294,victory,victory,edam; moon; month; flesh; part of the body; quarter; power; muscle; arnold,ショウ,か.つ; -が.ち; まさ.る; すぐ.れる; かつ
藤,1210,1295,wisteria,wisteria,flowers; edam; moon; month; flesh; part of the body; quarter; grains of rice,トウ; ドウ,ふじ
謄,1211,1296,facsimilie,facsimilie,mimeograph; facsimile; edam; moon; month; flesh; part of the body; quarter; say; words; keitai; mouth,トウ,
片,1212,1297,one-sided,one-sided,waiter with wine on tray,ヘン,かた-; かた
版,1213,1298,printing block,printing block,one-sided; waiter with wine on tray; anti-; demonstration; cliff; crotch,ハン,
之,1214,1299,of,of,Zorro; building blocks; zig-zag,シ,の; これ; おいて; ゆく; この
乏,1215,1300,destitution,destitution,drop; of; Zorro; building blocks; zig-zag,ボウ,とぼ.しい; とも.しい
芝,1216,1301,turf,turf,flowers; of; Zorro; building blocks; zig-zag,シ,しば
不,1217,1302,negative,negative,one; ceiling; person; drop,フ; ブ,
否,1218,1303,negate,negate,negative; mouth,ヒ,いな; いや
杯,1219,1304,cupfuls,cupfuls,tree; wood; negative,ハイ,さかずき
矢,1220,1305,dart,dart,drop; heavens,シ,や
矯,1221,1306,rectify,rectify,dart; drop; heavens; angel; heavens; mouth; hood; mouth,キョウ,た.める
族,1222,1307,tribe,tribe,banner; direction; compass; direction; reclining; lying down; dart; drop; heavens,ゾク,
知,1223,1308,know,know,dart; drop; heavens; mouth,チ,し.る; し.らせる
智,1224,1309,wisdom,wisdom,know; dart; drop; heavens; mouth; sun; day; tongue wagging,チ,
挨,2248,1310,shove,shove,finger; fingers; elbow; dart; drop; heavens,アイ,ひら.く
矛,1225,1311,halberd,halberd,beforehand,ム; ボウ,ほこ
柔,1226,1312,tender,tender,halberd; beforehand; tree; wood,ジュウ; ニュウ,やわ.らか; やわ.らかい; やわ; やわ.ら
務,1227,1313,task,task,halberd; beforehand; taskmaster; power; muscle; arnold,ム,つと.める
霧,1228,1314,fog,fog,rain; weather; task; halberd; beforehand; taskmaster; power; muscle; arnold,ム; ボウ; ブ,きり
班,1229,1315,squad,squad,sword; spear; cutlass; king; jewel; ball,ハン,
帰,1230,1316,homecoming,homecoming,sword; spear; cutlass; feather duster; broom; apron; crown; towel,キ,かえ.る; かえ.す; おく.る; とつ.ぐ
弓,1231,1317,bow,bow,,キュウ,ゆみ
引,1232,1318,pull,pull,bow; stick,イン,ひ.く; ひ.き; ひ.き-; -び.き; ひ.ける
弔,1233,1319,condolences,condolences,bow; walking stick,チョウ,とむら.う; とぶら.う
弘,1234,1320,vast,vast,bow; elbow,コウ; グ,ひろ.い
強,1235,1321,strong,strong,bow; elbow; insect,キョウ; ゴウ,つよ.い; つよ.まる; つよ.める; し.いる; こわ.い
弥,2241,1322,more and more,more and more,bow; hammock; reclining; lying down; small; little,ミ; ビ,いや; や; あまねし; いよいよ; とおい; ひさし; ひさ.しい; わた.る
弱,1236,1323,weak,weak,bow; ice,ジャク,よわ.い; よわ.る; よわ.まる; よわ.める
溺,2308,1324,drowning,drowning,water; water droplets; water pistol; weak; bow; ice,デキ; ジョウ; ニョウ,いばり; おぼ.れる
沸,1237,1325,seethe,seethe,water; water droplets; water pistol; dollar; bow; stick,フツ,わ.く; わ.かす
費,1238,1326,expense,expense,dollar; bow; stick; shellfish; clam; oyster; eye; animal legs; eight,ヒ,つい.やす; つい.える
第,1239,1327,No.,No.,no.; bamboo; dollar; bow; stick,ダイ; テイ,
弟,1240,1328,younger brother,younger brother,horns; dollar; bow; stick,テイ; ダイ; デ,おとうと
巧,1241,1329,adroit,adroit,craft; snare,コウ,たく.み; たく.む; うま.い
号,1242,1330,nickname,nickname,mouth; snare,ゴウ,さけ.ぶ; よびな
朽,1243,1331,decay,decay,tree; wood; snare,キュウ,く.ちる
誇,1244,1332,boast,boast,say; words; keitai; mouth; Batman; large; St. Bernard; chandelier; one; ceiling; snare,コ,ほこ.る
顎,2795,1333,chin,chin,mousetrap; mouth; one; ceiling; snare; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ガク,あご; あぎと
汚,1245,1334,dirty,dirty,water; water droplets; water pistol; snare; one; spike; stick,オ,けが.す; けが.れる; けが.らわしい; よご.す; よご.れる; きたな.い
与,1246,1335,bestow,bestow,slingshot; catapult; one,ヨ,あた.える; あずか.る; くみ.する; ともに
写,1247,1336,copy,copy,crown; bestow; slingshot; catapult; one,シャ; ジャ,うつ.す; うつ.る; うつ-; うつ.し
身,1248,1337,somebody,somebody,nose,シン,み
射,1249,1338,shoot,shoot,somebody; nose; glue,シャ,い.る; さ.す
謝,1250,1339,apologize,apologize,say; words; keitai; mouth; shoot bang bang; somebody; nose; glue,シャ,あやま.る
老,1251,1340,old man,old man,soil; dirt; ground; spoon; sitting on the ground,ロウ,お.いる; ふ.ける
考,1252,1341,consider,consider,old man; slingshot; catapult,コウ,かんが.える; かんが.え
孝,1253,1342,filial piety,filial piety,old man; child,コウ; キョウ,
教,1254,1343,teach,teach,filial piety; old man; child; taskmaster,キョウ,おし.える; おそ.わる
拷,1255,1344,torture,torture,finger; fingers; consider; old man; slingshot; catapult,ゴウ,
者,1256,1345,someone,someone,puppet; sooty; old man; sun; day,シャ,もの
煮,1257,1346,boil,boil,someone; puppet; sooty; old man; sun; day; oven-fire; barbecue,シャ,に.る; -に; に.える; に.やす
著,1258,1347,renowned,renowned,flowers; someone; puppet; sooty; old man; sun; day,チョ; チャク,あらわ.す; いちじる.しい
箸,2640,1348,chopsticks,chopsticks,bamboo; someone; puppet; sooty; old man; sun; day,チョ; チャク,はし
署,1259,1349,signature,signature,eye; cross-eyed; net; someone; puppet; sooty; old man; sun; day,ショ,
暑,1260,1350,sultry,sultry,sun; day; someone; puppet; sooty; old man,ショ,あつ.い
諸,1261,1351,various,various,say; words; keitai; mouth; someone; puppet; sooty; old man; sun; day,ショ,もろ
猪,1262,1352,boar,boar,pack of wild dogs; someone; puppet; sooty; old man; sun; day,チョ,い; いのしし
渚,1263,1353,strand,strand,water; water droplets; water pistol; someone; puppet; sooty; old man; sun; day,ショ,なぎさ
賭,1264,1354,gamble,gamble,shellfish; clam; oyster; eye; animal legs; eight; someone; puppet; sooty; old man; sun; day,ト,か.ける; かけ
峡,1265,1355,gorge,gorge,mountain; scissors; husband; horns,キョウ; コウ,はざま
狭,1266,1356,cramped,cramped,pack of wild dogs; scissors; husband; horns,キョウ; コウ,せま.い; せば.める; せば.まる; さ
挟,1267,1357,sandwiched,sandwiched,finger; fingers; scissors; husband; horns,キョウ; ショウ,はさ.む; はさ.まる; わきばさ.む; さしはさ.む
頬,2792,1358,cheek,cheek,,,
追,1268,1359,chase,chase,maestro; road,ツイ,お.う
阜,2928,1360,large hill,large hill,maestro; ten; needle,フ; フウ,
師,1269,1361,expert,expert,maestro; noren; one; ceiling; towel,シ; ス,もろもろ; なら.う
帥,1270,1362,commander,commander,maestro; towel,スイ,
官,1271,1363,bureaucrat,bureaucrat,house; maestro without baton,カン,
棺,1272,1364,coffin,coffin,tree; wood; bureaucrat; house; maestro without baton,カン,
管,1273,1365,pipe,pipe,bamboo; bureaucrat; house; maestro without baton,カン,くだ
父,1274,1366,father,father,,フ,ちち
釜,2332,1367,cauldron,cauldron,father; metal; gold,フ,かま
交,1275,1368,mingle,mingle,top hat; father,コウ,まじ.わる; まじ.える; ま.じる; まじ.る; ま.ざる; ま.ぜる; -か.う; か.わす; かわ.す; こもごも
効,1276,1369,merit,merit,mingle; top hat; father; power; muscle; arnold,コウ,き.く; ききめ; なら.う
較,1277,1370,contrast,contrast,car; mingle; top hat; father,カク; コウ,くら.べる
校,1278,1371,exam,exam,tree; wood; mingle; top hat; father,コウ; キョウ,
足,1279,1372,leg,leg,mouth; mending; mend,ソク,あし; た.りる; た.る; た.す
促,1280,1373,stimulate,stimulate,person; leg; mouth; mending; mend,ソク,うなが.す
捉,2260,1374,nab,nab,finger; fingers; leg; mouth; mend,ソク; サク,とら.える
距,1281,1375,long-distance,long-distance,wooden leg; mouth; stop; footprint; giant,キョ,へだ.たる; けづめ
路,1282,1376,path,path,wooden leg; mouth; stop; footprint; each; walking legs; mouth,ロ; ル,-じ; みち
露,1283,1377,dew,dew,rain; weather; path; wooden leg; mouth; stop; footprint; each; walking legs; mouth,ロ; ロウ,つゆ
跳,1284,1378,hop,hop,wooden leg; mouth; stop; footprint; portent; omen,チョウ,は.ねる; と.ぶ; -と.び
躍,1285,1379,leap,leap,wooden leg; mouth; stop; footprint; futon; feathers; wings; turkey,ヤク,おど.る
践,1286,1380,tread,tread,wooden leg; mouth; stop; footprint; parade float,セン,ふ.む
踏,1287,1381,step,step,wooden leg; mouth; stop; footprint; wednesday; boots; water; sun; day,トウ,ふ.む; ふ.まえる
踪,3019,1382,trail,trail,,ショウ; ソウ,あと
骨,1288,1383,skeleton,skeleton,joint; moon; month; flesh; part of the body,コツ,ほね
滑,1289,1384,slippery,slippery,water; water droplets; water pistol; skeleton; joint; moon; month; flesh; part of the body,カツ; コツ,すべ.る; なめ.らか
髄,1290,1385,marrow,marrow,skeleton; joint; moon; month; flesh; part of the body; highwayman; possess; by one’s side; road,ズイ,
禍,1291,1386,calamity,calamity,altar; jawbone; joint; hood; mouth,カ,わざわい
渦,1292,1387,whirlpool,whirlpool,water; water droplets; water pistol; jawbone; joint; hood; mouth,カ,うず
鍋,2757,1388,pot,pot,metal; gold; jawbone; joint; hood; mouth,カ,なべ
過,1293,1389,overdo,overdo,jawbone; joint; hood; mouth; road,カ,す.ぎる; -す.ぎる; -す.ぎ; す.ごす; あやま.つ; あやま.ち; よ.ぎる
阪,1294,1390,Heights,Heights,heights; pinnacle; parthenon; acropolis; anti-; demonstration; cliff; crotch,ハン,さか
阿,1295,1391,Africa,Africa,africa; pinnacle; parthenon; acropolis; can; mouth; street; nail; spike,ア; オ,おもね.る
際,1296,1392,occasion,occasion,pinnacle; parthenon; acropolis; ritual; moon; month; flesh; part of the body; crotch; altar; show; two; small,サイ,きわ; -ぎわ
障,1297,1393,hinder,hinder,pinnacle; parthenon; acropolis; badge; vase; stand up; sunflower; early; sun; day; ten; needle,ショウ,さわ.る
隙,2426,1394,chink,chink,pinnacle; parthenon; acropolis; small; little; sun; day; little,ゲキ; キャク; ケキ,すき; す.く; す.かす; ひま
随,1298,1395,follow,follow,pinnacle; parthenon; acropolis; highwayman; possess; by one’s side; moon; month; flesh; part of the body; road,ズイ,まにまに; したが.う
陪,1299,1396,auxiliary,auxiliary,obeisance; pinnacle; parthenon; acropolis; muzzle; vase; stand up; mouth,バイ,
陽,1300,1397,sunshine,sunshine,pinnacle; parthenon; acropolis; piggy bank; sun; day; piglets,ヨウ,ひ
陳,1301,1398,line up,line up,exhibit; pinnacle; parthenon; acropolis; east; tree; wood; sun; day,チン,ひ.ねる
防,1302,1399,ward off,ward off,pinnacle; parthenon; acropolis; compass; direction,ボウ,ふせ.ぐ
附,1303,1400,affixed,affixed,pinnacle; parthenon; acropolis; adhere; sellotape; person; glue,フ,つ.ける; つ.く
院,1304,1401,Inst.,Inst.,pinnacle; parthenon; acropolis; perfect; house; beginnings; two; human legs,イン,
陣,1305,1402,camp,camp,pinnacle; parthenon; acropolis; car,ジン,
隊,1306,1403,regiment,regiment,pinnacle; parthenon; acropolis; animal horns; sow; pig; wart hog; regimental mascot,タイ,
墜,1307,1404,crash,crash,regiment; pinnacle; parthenon; acropolis; animal horns; sow; pig; wart hog; regimental mascot; soil; dirt; ground,ツイ,お.ちる; お.つ
降,1308,1405,descend,descend,pinnacle; parthenon; acropolis; walking legs; sunglasses with one lens missing; monocle,コウ; ゴ,お.りる; お.ろす; ふ.る; ふ.り; くだ.る; くだ.す
階,1309,1406,story,story,storey; pinnacle; parthenon; acropolis; all; compare; spoon; sitting on the ground; white; dove,カイ,きざはし
陛,1310,1407,highness,highness,pinnacle; parthenon; acropolis; compare; spoon; sitting on the ground; soil; dirt; ground,ヘイ,
隣,1311,1408,neighboring,neighboring,neighbouring; pinnacle; parthenon; acropolis; shoeshine; rice; sunglasses; dancing legs; ballerina; evening,リン,とな.る; となり
隔,1312,1409,isolate,isolate,pinnacle; parthenon; acropolis; tripod; one; ceiling; mouth; hood; human legs; street; nail; spike,カク,へだ.てる; へだ.たる
隠,1313,1410,conceal,conceal,pinnacle; parthenon; acropolis; hideaway; claw; vulture; broom; heart,イン; オン,かく.す; かく.し; かく.れる; かか.す; よ.る
堕,1314,1411,degenerate,degenerate,pinnacle; parthenon; acropolis; possess; by one’s side; moon; month; flesh; part of the body; ground; soil; dirt; ground,ダ,お.ちる; くず.す; くず.れる
陥,1315,1412,collapse,collapse,pinnacle; parthenon; acropolis; straight-jacket; bound up; olden times; old days; stick; sun; day,カン,おちい.る; おとしい.れる
穴,1316,1413,hole,hole,house; eight,ケツ,あな
空,1317,1414,empty,empty,hole; house; human legs; craft,クウ,そら; あ.く; あ.き; あ.ける; から; す.く; す.かす; むな.しい
控,1318,1415,withdraw,withdraw,finger; fingers; empty; sky; hole; house; human legs; craft,コウ,ひか.える; ひか.え
突,1319,1416,stab,stab,hole; house; human legs; large; St. Bernard,トツ; カ,つ.く
究,1320,1417,research,research,hole; house; human legs; nine; baseball,キュウ; ク,きわ.める
窒,1321,1418,plug up,plug up,hole; house; human legs; climax; wall; one; ceiling; elbow; soil; dirt; ground,チツ,
窃,1322,1419,stealth,stealth,hole; house; human legs; cut; seven; sword; dagger,セツ,ぬす.む; ひそ.か
窟,2615,1420,cavern,cavern,hole; house; human legs; yield; flag; exit,クツ; コツ,いわや; いはや; あな
窪,1323,1421,depression,depression,hole; house; human legs; water; water droplets; water pistol; ivy; square jewel; soil; dirt; ground,ワ; ア,くぼ.む; くぼ.み; くぼ.まる; くぼ
搾,1324,1422,squeeze,squeeze,finger; fingers; tight; hole; house; human legs; saw,サク,しぼ.る
窯,1325,1423,kiln,kiln,hole; house; human legs; sheep; oven-fire; barbecue,ヨウ,かま
窮,1326,1424,hard up,hard up,hole; house; human legs; somebody; nose; bow,キュウ; キョウ,きわ.める; きわ.まる; きわ.まり; きわ.み
探,1327,1425,grope,grope,finger; fingers; paper punch; Miss World; hole; house; human legs; tree; wood,タン,さぐ.る; さが.す
深,1328,1426,deep,deep,water; water droplets; water pistol; paper punch; Miss World; hole; house; human legs; tree; wood,シン,ふか.い; -ぶか.い; ふか.まる; ふか.める; み-
丘,1329,1427,hill,hill,axe; one; floor,キュウ,おか
岳,1330,1428,Point,Point,point; hill; axe; one; floor; mountain,ガク,たけ
兵,1331,1429,soldier,soldier,hill; axe; one; floor; animal legs; eight,ヘイ; ヒョウ,つわもの
浜,1332,1430,seacoast,seacoast,water; water droplets; water pistol; soldier; hill; axe; one; floor; animal legs; eight,ヒン,はま
糸,1333,1431,thread,thread,spiderman,シ,いと
織,1334,1432,weave,weave,thread; spiderman; kazoo; sound; vase; stand up; sun; day; fiesta,ショク; シキ,お.る; お.り; おり; -おり; -お.り
繕,1335,1433,darning,darning,thread; spiderman; virtuous; sheep; horns; mouth,ゼン,つくろ.う
縮,1336,1434,shrink,shrink,thread; spiderman; inn; house; person; hundred; one; ceiling; white; dove,シュク,ちぢ.む; ちぢ.まる; ちぢ.める; ちぢ.れる; ちぢ.らす
繁,1337,1435,luxuriant,luxuriant,cleverness; reclining; lying down; mother; breasts; taskmaster; thread; spiderman,ハン,しげ.る; しげ.く
縦,1338,1436,vertical,vertical,thread; spiderman; accompany; Nelson; column; going; line; horns; mend,ジュウ,たて
緻,3020,1437,fine,fine,,チ,こまか.い
線,1339,1438,line,line,thread; spiderman; spring; white; dove; water,セン,すじ
綻,2670,1439,come apart at the seams,come apart at the seams,thread; spiderman; determine; determined; house; mend,タン,ほころ.びる
締,1340,1440,tighten,tighten,thread; spiderman; sovereign; vase; stand up; apron; crown; towel,テイ,し.まる; し.まり; し.める; -し.め; -じ.め
維,1341,1441,fiber,fiber,thread; spiderman; turkey,イ,
羅,1342,1442,gauze,gauze,eye; cross-eyed; net; fibre; thread; spiderman; turkey,ラ,うすもの
練,1343,1443,practice,practice,thread; spiderman; east; tree; wood; sun; day,レン,ね.る; ね.り
緒,1344,1444,thong,thong,thread; spiderman; someone; puppet; sooty; old man; sun; day,ショ; チョ,お; いとぐち
続,1345,1445,continue,continue,thread; spiderman; sell; samurai; crown; human legs,ゾク; ショク; コウ; キョウ,つづ.く; つづ.ける; つぐ.ない
絵,1346,1446,picture,picture,thread; spiderman; meeting; one; wall; umbrella; rising cloud; two; elbow; wall,カイ; エ,
統,1347,1447,overall,overall,thread; spiderman; allot; infant; toddler; top hat; elbow; human legs,トウ,す.べる; ほび.る
絞,1348,1448,strangle,strangle,thread; spiderman; mingle; top hat; father,コウ,しぼ.る; し.める; し.まる
給,1349,1449,salary,salary,thread; spiderman; fit; meeting; umbrella; one; mouth,キュウ,たま.う; たも.う; -たま.え
絡,1350,1450,entwine,entwine,thread; spiderman; each; walking legs; mouth,ラク,から.む; から.まる
結,1351,1451,tie,tie,thread; spiderman; aerosol; samurai; mouth,ケツ; ケチ,むす.ぶ; ゆ.う; ゆ.わえる
終,1352,1452,end,end,thread; spiderman; winter; walking legs; ice; drop,シュウ,お.わる; -お.わる; おわ.る; お.える; つい; つい.に
級,1353,1453,class,class,thread; spiderman; reach out; outstretched hands,キュウ,
紀,1354,1454,chronicle,chronicle,thread; spiderman; snake; self,キ,
紅,1355,1455,crimson,crimson,thread; spiderman; craft,コウ; ク,べに; くれない; あか.い
納,1356,1456,settlement,settlement,thread; spiderman; inside; person; belt,ノウ; ナッ; ナ; ナン; トウ,おさ.める; -おさ.める; おさ.まる
紡,1357,1457,spinning,spinning,thread; spiderman; compass; direction,ボウ,つむ.ぐ
紛,1358,1458,distract,distract,thread; spiderman; part; eight; sword; dagger,フン,まぎ.れる; -まぎ.れ; まぎ.らす; まぎ.らわす; まぎ.らわしい
紹,1359,1459,introduce,introduce,thread; spiderman; summon; seduce; sword; dagger; mouth,ショウ,
経,1360,1460,sutra,sutra,thread; spiderman; spool; clod; toilet paper; crotch; soil; dirt; ground,ケイ; キョウ,へ.る; た.つ; たていと; はか.る; のり
紳,1361,1461,sire,sire,thread; spiderman; monkey; sun; day; stick,シン,
約,1362,1462,promise,promise,thread; spiderman; ladle,ヤク,
細,1363,1463,dainty,dainty,thread; spiderman; rice field; brains,サイ,ほそ.い; ほそ.る; こま.か; こま.かい
累,1364,1464,accumulate,accumulate,rice field; brains; thread; spiderman,ルイ,
索,1365,1465,cord,cord,bishop; cross; ten; needle; crown; thread; spiderman,サク,
総,1366,1466,general,general,thread; spiderman; public; eight; elbows; heart,ソウ,す.べて; すべ.て; ふさ
綿,1367,1467,cotton,cotton,thread; spiderman; napkin; white; dove; towel,メン,わた
絹,1368,1468,silk,silk,thread; spiderman; mouth; moon; month; flesh; part of the body,ケン,きぬ
繰,1369,1469,winding,winding,thread; spiderman; furniture; goods; mouth; tree; wood,ソウ,く.る
継,1370,1470,inherit,inherit,thread; spiderman; rice; fishhook,ケイ,つ.ぐ; まま-
緑,1371,1471,green,green,thread; spiderman; dustpan; broom; grains of rice,リョク; ロク,みどり
縁,1372,1472,affinity,affinity,thread; spiderman; broom; sow; pig,エン; ネン,ふち; ふちど.る; ゆかり; よすが; へり; えにし
網,1373,1473,netting,netting,thread; spiderman; glass jar; hood; horns; one; deceased; perish; top hat; fishhook,モウ,あみ
緊,1374,1474,tense,tense,loincloth; retainer; slave; crotch; thread; spiderman,キン,
紫,1375,1475,purple,purple,Prince; this here; stop; footprint; spoon; sitting on the ground; thread; spiderman,シ,むらさき
縛,1376,1476,truss,truss,thread; spiderman; acupuncturist; specialty; drop; ten; needle; rice field; brains; glue,バク,しば.る
縄,1377,1477,straw rope,straw rope,thread; spiderman; eels; sun; day,ジョウ,なわ; ただ.す
幼,1378,1478,infancy,infancy,cocoon; power; muscle; arnold,ヨウ,おさな.い
後,1379,1479,behind,behind,Nelson; column; going; line; cocoon; walking legs,ゴ; コウ,のち; うし.ろ; うしろ; あと; おく.れる
幽,1380,1480,faint,faint,seclude; cocoon; mountain,ユウ; ヨウ,ふか.い; かす.か; くら.い; しろ.い
幾,1381,1481,how many,how many,cocoon; person; fiesta,キ,いく-; いく.つ; いく.ら
機,1382,1482,mechanism,mechanism,tree; wood; abacus; how many; cocoon; person; fiesta,キ,はた
畿,2887,1483,capital suburbs,capital suburbs,cocoon; rice field; brains; fiesta,キ,みやこ
玄,1383,1484,mysterious,mysterious,top hat; cocoon,ゲン,
畜,1384,1485,livestock,livestock,mysterious; top hat; cocoon; rice field; brains,チク,
蓄,1385,1486,amass,amass,flowers; livestock; mysterious; top hat; cocoon; rice field; brains,チク,たくわ.える
弦,1386,1487,bowstring,bowstring,bow; mysterious; top hat; cocoon,ゲン,つる
擁,1387,1488,hug,hug,finger; fingers; mysterious; top hat; cocoon; turkey,ヨウ,
滋,1388,1489,nourishing,nourishing,water; water droplets; water pistol; double-mysterious; mothballs; horns; one; cocoon,ジ,
慈,1389,1490,mercy,mercy,double-mysterious; mothballs; horns; one; cocoon; heart,ジ,いつく.しむ
磁,1390,1491,magnet,magnet,stone; rock; double-mysterious; mothballs; horns; one; cocoon,ジ,
系,1391,1492,lineage,lineage,stick; drop; thread; spiderman,ケイ,
係,1392,1493,person in charge,person in charge,person; lineage; drop; thread; spiderman,ケイ,かか.る; かかり; -がかり; かか.わる
孫,1393,1494,grandchild,grandchild,child; lineage; drop; thread; spiderman,ソン,まご
懸,1394,1495,suspend,suspend,prefecture; eye; fishhook; small; little; lineage; stick; drop; thread; spiderman; heart,ケン; ケ,か.ける; か.かる
遜,2422,1496,modest,modest,grandchild; child; lineage; drop; thread; spiderman; road,ソン,したが.う; へりくだ.る; ゆず.る
却,1395,1497,instead,instead,gone; soil; dirt; ground; elbow; stamp,キャク,かえ.って; しりぞ.く; しりぞ.ける
脚,1396,1498,shins,shins,skids; moon; month; flesh; part of the body; instead; gone; soil; dirt; ground; elbow; stamp,キャク; キャ; カク,あし
卸,1397,1499,wholesale,wholesale,horseshoe; horse; pantomime horse; noon; sign of the horse; stop; footprint; stamp,シャ,おろ.す; おろし; おろ.し
御,1398,1500,honorable,honorable,Nelson; column; going; line; wholesale; horseshoe; pantomime horse; noon; sign of the horse; stop; footprint; stamp,ギョ; ゴ,おん-; お-; み-
服,1399,1501,clothing,clothing,moon; month; flesh; part of the body; underpants; stamp; crotch,フク,
命,1400,1502,fate,fate,fit; meeting; umbrella; one; mouth; stamp,メイ; ミョウ,いのち
令,1401,1503,orders,orders,meeting; chop-seal; hanko,レイ,
零,1402,1504,zero,zero,rain; weather; orders; meeting; chop-seal; hanko,レイ,ぜろ; こぼ.す; こぼ.れる
齢,1403,1505,age,age,teeth; tooth; stop; footprint; rice; shovel; orders; meeting; chop-seal; hanko,レイ,よわ.い; とし
冷,1404,1506,cool,cool,ice; orders; meeting; chop-seal; hanko,レイ,つめ.たい; ひ.える; ひ.や; ひ.ややか; ひ.やす; ひ.やかす; さ.める; さ.ます
領,1405,1507,jurisdiction,jurisdiction,orders; meeting; chop-seal; hanko; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,リョウ,えり
鈴,1406,1508,small bell,small bell,metal; gold; orders; meeting; chop-seal; hanko,レイ; リン,すず
勇,1407,1509,courage,courage,chop-seal; hanko; male; rice field; brains; power; muscle; arnold,ユウ,いさ.む
湧,2284,1510,bubble up,bubble up,water; water droplets; water pistol; courageous; courage; chop-seal; hanko; male; rice field; brains; power; muscle; arnold,ユウ; ヨウ; ユ,わ.く
通,1408,1511,traffic,traffic,pogo stick; chop-seal; hanko; utilise; utilize; road,ツウ; ツ,とお.る; とお.り; -とお.り; -どお.り; とお.す; とお.し; -どお.し; かよ.う
踊,1409,1512,jump,jump,wooden leg; mouth; stop; footprint; pogo stick; chop-seal; hanko; utilise; utilize,ヨウ,おど.る
疑,1410,1513,doubt,doubt,spoon; sitting on the ground; dart; drop; heavens; chop-seal; hanko; zoo; critters,ギ,うたが.う
擬,1411,1514,mimic,mimic,finger; fingers; doubt; spoon; sitting on the ground; dart; drop; heavens; chop-seal; hanko; zoo; critters,ギ,まが.い; もど.き
凝,1412,1515,congeal,congeal,ice; doubt; spoon; sitting on the ground; dart; drop; heavens; chop-seal; hanko; zoo; critters,ギョウ,こ.る; こ.らす; こご.らす; こご.らせる; こご.る
範,1413,1516,pattern,pattern,bamboo; car; fingerprint,ハン,
犯,1414,1517,crime,crime,pack of wild dogs; fingerprint,ハン; ボン,おか.す
氾,2301,1518,widespread,widespread,water; water droplets; water pistol; fingerprint,ハン,ひろ.がる
厄,1415,1519,unlucky,unlucky,cliff; fingerprint,ヤク,
危,1416,1520,dangerous,dangerous,bound up; unlucky; cliff; fingerprint,キ,あぶ.ない; あや.うい; あや.ぶむ
宛,1417,1521,address,address,house; mailbox; evening; fingerprint,エン,あ.てる; -あて; -づつ; あたか.も
腕,1418,1522,arm,arm,moon; month; flesh; part of the body; address; house; mailbox; evening; fingerprint,ワン,うで
苑,1419,1523,garden,garden,flowers; mailbox; evening; fingerprint,エン; オン,その; う.つ
怨,1420,1524,grudge,grudge,mailbox; evening; fingerprint; heart,エン; オン; ウン,うら.む; うらみ; うら.めしい
柳,1421,1525,willow,willow,tree; wood; blown eggs; sign of the hare; receipt; stamp,リュウ,やなぎ
卵,1422,1526,egg,egg,sign of the hare; receipt; stamp; drops,ラン,たまご
留,1423,1527,detain,detain,receipt; sword; dagger; rice field; brains,リュウ; ル,と.める; と.まる; とど.める; とど.まる; るうぶる
瑠,2555,1528,marine blue,marine blue,king; jewel; ball; detain; receipt; dagger; sword; rice field; brains,ル; リュウ,
貿,1424,1529,trade,trade,receipt; sword; dagger; shellfish; clam; oyster; eye; animal legs; eight,ボウ,
印,1425,1530,stamp,stamp,staples,イン,しるし; -じるし; しる.す
臼,2063,1531,mortar,mortar,back to back staples,キュウ; グ,うす; うすづ.く
毀,2067,1532,break,break,mortar; soil; dirt; ground; cruise missile; missile; wind; crotch,キ,こぼ.つ; こわ.す; こぼ.れる; こわ.れる; そし.る; やぶ.る
興,1426,1533,entertain,entertain,staples; same; monks; hood; one; mouth; tool; animal legs; eight,コウ; キョウ,おこ.る; おこ.す
酉,1427,1534,sign of the bird,sign of the bird,whiskey bottle; west; one,ユウ,とり
酒,1428,1535,sake,sake,water; water droplets; water pistol; whiskey bottle,シュ,さけ; さか-
酌,1429,1536,bartending,bartending,whiskey bottle; ladle,シャク,く.む
酎,2748,1537,hooch,hooch,whiskey bottle; glue,チュウ; チュ,かも.す
酵,1430,1538,fermentation,fermentation,whiskey bottle; filial piety; old man; child,コウ,
酷,1431,1539,cruel,cruel,whiskey bottle; revelation; cow; mouth,コク,ひど.い
酬,1432,1540,repay,repay,whiskey bottle; state; stream; drop,シュウ; シュ; トウ,むく.いる
酪,1433,1541,dairy products,dairy products,whiskey bottle; each; walking legs; mouth,ラク,
酢,1434,1542,vinegar,vinegar,whiskey bottle; saw,サク,す
酔,1435,1543,drunk,drunk,whiskey bottle; ninety; nine; baseball; ten; needle,スイ,よ.う; よ.い; よ
配,1436,1544,distribute,distribute,whiskey bottle; snake; self,ハイ,くば.る
酸,1437,1545,acid,acid,whiskey bottle; streetwalker; Ministry of silly walks; John Cleese; license; elbow; human legs; walking legs,サン,す.い
猶,1438,1546,waver,waver,furthermore; pack of wild dogs; chieftain; Molotov cocktail; animal horns; whiskey bottle,ユウ; ユ,なお
尊,1439,1547,revered,revered,chieftain; Molotov cocktail; animal horns; whiskey bottle; glue,ソン,たっと.い; とうと.い; たっと.ぶ; とうと.ぶ
豆,1440,1548,beans,beans,table; one; mouth,トウ; ズ,まめ; まめ-
頭,1441,1549,head,head,beans; table; one; mouth; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,トウ; ズ; ト,あたま; かしら; -がしら; かぶり
短,1442,1550,short,short,dart; drop; heavens; beans; table; one; mouth,タン,みじか.い
豊,1443,1551,bountiful,bountiful,bend; beans; table; one; mouth,ホウ; ブ,ゆた.か; とよ
鼓,1444,1552,drum,drum,samurai; beans; table; one; mouth; branch; ten; needle; crotch,コ,つづみ
喜,1445,1553,rejoice,rejoice,drum; samurai; beans; table; one; mouth; mouth,キ,よろこ.ぶ; よろこ.ばす
樹,1446,1554,timber-trees,timber-trees,tree; wood; drum; samurai; beans; table; one; mouth; glue,ジュ,き
皿,1447,1555,dish,dish,,ベイ,さら
血,1448,1556,blood,blood,drop; dish,ケツ,ち
盆,1449,1557,basin,basin,part; eight; sword; dagger; dish,ボン,
盟,1450,1558,alliance,alliance,bright; sun; day; moon; month; flesh; part of the body; dish,メイ,
盗,1451,1559,steal,steal,next; ice; lack; yawn; dish,トウ,ぬす.む; ぬす.み
温,1452,1560,warm,warm,water; water droplets; water pistol; sun; day; dish,オン,あたた.か; あたた.かい; あたた.まる; あたた.める; ぬく
蓋,2388,1561,lid,lid,flowers; gone; soil; dirt; ground; elbow; dish,ガイ; カイ; コウ,ふた; けだ.し; おお.う; かさ; かこう
監,1453,1562,oversee,oversee,retainer; slave; reclining; lying down; one; floor; dish,カン,
濫,1454,1563,overflow,overflow,water; water droplets; water pistol; oversee; retainer; slave; reclining; lying down; one; floor; dish,ラン,みだ.りに; みだ.りがましい
鑑,1455,1564,specimen,specimen,metal; gold; oversee; retainer; slave; reclining; lying down; one; floor; dish,カン,かんが.みる; かがみ
藍,2371,1565,indigo,indigo,flowers; oversee; retainer; slave; reclining; lying down; one; floor; dish,ラン,あい
猛,1456,1566,fierce,fierce,pack of wild dogs; child; dish,モウ,
盛,1457,1567,boom,boom,turn into; dish,セイ; ジョウ,も.る; さか.る; さか.ん
塩,1458,1568,salt,salt,soil; dirt; ground; reclining; lying down; mouth; dish,エン,しお
銀,1459,1569,silver,silver,metal; gold,ギン,しろがね
恨,1460,1570,resentment,resentment,regret; Freud; state of mind; silver,コン,うら.む; うら.めしい
根,1461,1571,root,root,tree; wood; silver,コン,ね; -ね
即,1462,1572,instant,instant,silver; stamp,ソク,つ.く; つ.ける; すなわ.ち
爵,1463,1573,baron,baron,claw; vulture; net; eye; silver; glue,シャク,
節,1464,1574,node,node,bamboo; instant; silver; stamp,セツ; セチ,ふし; -ぶし; のっと
退,1465,1575,retreat,retreat,road; silver,タイ,しりぞ.く; しりぞ.ける; ひ.く; の.く; の.ける; ど.く
限,1466,1576,limit,limit,pinnacle; parthenon; acropolis; silver,ゲン,かぎ.る; かぎ.り; -かぎ.り
眼,1467,1577,eyeball,eyeball,eye; silver,ガン; ゲン,まなこ; め
良,1468,1578,good,good,drop; silver,リョウ,よ.い; -よ.い; い.い; -い.い
朗,1469,1579,melodious,melodious,halo; drop; silver; moon; month; flesh; part of the body,ロウ,ほが.らか; あき.らか
浪,1470,1580,wandering,wandering,water; water droplets; water pistol; halo; drop; silver,ロウ,
娘,1471,1581,daughter,daughter,woman; halo; drop; silver,ジョウ,むすめ; こ
食,1472,1582,eat,eat,food; umbrella; good; halo; drop; silver,ショク; ジキ,く.う; く.らう; た.べる; は.む
飯,1473,1583,meal,meal,eat; food; umbrella; good; halo; drop; silver; anti-; demonstration; cliff; crotch,ハン,めし
飲,1474,1584,drink,drink,eat; food; umbrella; good; halo; drop; silver; lack; yawn,イン; オン,の.む; -の.み
飢,1475,1585,hungry,hungry,eat; food; umbrella; good; halo; drop; silver; wind,キ,う.える
餓,1476,1586,starve,starve,eat; food; umbrella; good; halo; drop; silver; ego; hand; fiesta,ガ,う.える
飾,1477,1587,decorate,decorate,eat; food; umbrella; good; halo; drop; silver; reclining; lying down; towel,ショク,かざ.る; かざ.り
餌,2797,1588,feed,feed,eat; food; umbrella; good; halo; drop; silver; ear,ジ; ニ,え; えば; えさ; もち
館,1478,1589,Bldg.,Bldg.,eat; food; umbrella; good; halo; drop; silver; bureaucrat; house; maestro without baton,カン,やかた; たて
餅,2802,1590,mochi,mochi,eat; food; umbrella; good; halo; drop; silver; puzzle; horns; two hands,ヘイ; ヒョウ,もち; もちい
養,1479,1591,foster,foster,sheep; eat; food; umbrella; good; halo; drop; silver,ヨウ; リョウ,やしな.う
飽,1480,1592,sated,sated,eat; food; umbrella; good; halo; drop; silver; wrap; bound up; snake; self,ホウ,あ.きる; あ.かす; あ.く
既,1481,1593,previously,previously,silver; waitress,キ,すで.に
概,1482,1594,outline,outline,roots; tree; wood; silver; waitress; previously,ガイ,おうむ.ね
慨,1483,1595,rue,rue,regret; resentment; Freud; state of mind; silver; waitress; previously,ガイ,
平,1484,1596,even,even,water-lily; lily pad,ヘイ; ビョウ; ヒョウ,たい.ら; -だいら; ひら; ひら-
呼,1485,1597,call,call,mouth; even; water-lily; lily pad; question mark,コ,よ.ぶ
坪,1486,1598,two-mat area,two-mat area,soil; dirt; ground; even; water-lily; lily pad,ヘイ,つぼ
評,1487,1599,evaluate,evaluate,say; words; keitai; mouth; even; water-lily; lily pad,ヒョウ,
刈,1488,1600,reap,reap,sheaf; sword; sabre; saber,ガイ; カイ,か.る
刹,2144,1601,moment,moment,sheaf; tree; wood; sword; sabre; saber,セチ; セツ; サツ,
希,1489,1602,hope,hope,sheaf; linen; by one’s side; towel,キ; ケ,まれ
凶,1490,1603,villain,villain,sheaf; shovel,キョウ,
胸,1491,1604,bosom,bosom,moon; month; flesh; part of the body; bound up; villain; sheaf; shovel,キョウ,むね; むな-
離,1492,1605,detach,detach,sheik; top hat; villain; sheaf; shovel; belt; elbow; turkey,リ,はな.れる; はな.す
璃,2048,1606,crystal,crystal,king; jewel; ball; sheik; top hat; villain; sheaf; shovel; belt; elbow,リ,
殺,1493,1607,kill,kill,sheaf; tree; wood; cruise missile; missile; wind; crotch,サツ; サイ; セツ,ころ.す; -ごろ.し; そ.ぐ
爽,2855,1608,bracing,bracing,large; St. Bernard; sheaf,ソウ,あき.らか; さわ.やか; たがう
純,1494,1609,genuine,genuine,thread; spiderman; earthworm; drop; shovel; fishhook,ジュン,
頓,2788,1610,immediate,immediate,earthworm; drop; shovel; fishhook; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,トン; トツ,にわか.に; とん.と; つまず.く; とみ.に; ぬかずく
鈍,1495,1611,dull,dull,metal; gold; earthworm; drop; shovel; fishhook,ドン,にぶ.い; にぶ.る; にぶ-; なま.る; なまく.ら
辛,1496,1612,spicy,spicy,stand up; vase; ten; needle,シン,から.い; つら.い; -づら.い; かのと
辞,1497,1613,resign,resign,tongue; thousand; mouth; spicy; stand up; vase; ten; needle,ジ,や.める; いな.む
梓,1498,1614,catalpa,catalpa,tree; wood; spicy; stand up; vase; ten; needle,シ,あずさ
宰,1499,1615,superintend,superintend,house; spicy; stand up; vase; ten; needle,サイ,
壁,1500,1616,wall,wall,ketchup; flag; mouth; spicy; stand up; vase; ten; needle; soil; dirt; ground,ヘキ,かべ
璧,3021,1617,holed gem,holed gem,,ヘキ,たま
避,1501,1618,evade,evade,ketchup; flag; mouth; spicy; stand up; vase; ten; needle; road,ヒ,さ.ける; よ.ける
新,1502,1619,new,new,red pepper; stand up; vase; tree; wood; axe,シン,あたら.しい; あら.た; あら-; にい-
薪,1503,1620,firewood,firewood,fuel; flowers; new; red pepper; stand up; vase; tree; wood; axe,シン,たきぎ; まき
親,1504,1621,parent,parent,red pepper; stand up; vase; tree; wood; see; telescope; eye; human legs,シン,おや; おや-; した.しい; した.しむ
幸,1505,1622,happiness,happiness,ten; needle; stand up; vase; ten; needle,コウ,さいわ.い; さち; しあわ.せ
執,1506,1623,tenacious,tenacious,happiness; ten; needle; stand up; vase; fat man; musashimaru; nine; baseball; drop,シツ; シュウ,と.る
摯,3022,1624,clasp,clasp,,シ,いた.る
報,1507,1625,report,report,happiness; ten; needle; stand up; vase; underpants; stamp; crotch,ホウ,むく.いる
叫,1508,1626,shout,shout,mouth; cornucopia,キョウ,さけ.ぶ
糾,1509,1627,twist,twist,thread; spiderman; cornucopia,キュウ,ただ.す
収,1510,1628,income,income,cornucopia; crotch,シュウ,おさ.める; おさ.まる
卑,1511,1629,lowly,lowly,Wayne Slob; drop; rice field; brains; cornucopia; ten; needle,ヒ,いや.しい; いや.しむ; いや.しめる
碑,1512,1630,tombstone,tombstone,stone; rock; lowly; Wayne Slob; drop; rice field; brains; cornucopia; ten; needle,ヒ,いしぶみ
陸,1513,1631,land,land,pinnacle; parthenon; acropolis; mini-tractor; rice seedlings; soil; dirt; ground; human legs,リク; ロク,おか
睦,1514,1632,intimate,intimate,eye; mini-tractor; rice seedlings; soil; dirt; ground; human legs,ボク; モク,むつ.まじい; むつ.む; むつ.ぶ
勢,1515,1633,forces,forces,mini-tractor; rice seedlings; soil; dirt; ground; human legs; fat man; musashimaru; round; nine; baseball; drop; power; muscle; arnold,セイ; ゼイ,いきお.い; はずみ
熱,1516,1634,heat,heat,mini-tractor; rice seedlings; soil; dirt; ground; human legs; fat man; musashimaru; round; nine; baseball; drop; oven-fire; barbecue,ネツ,あつ.い
菱,1517,1635,diamond,diamond,flowers; Mao; soil; dirt; ground; human legs; walking legs,リョウ,ひし
陵,1518,1636,mausoleum,mausoleum,pinnacle; parthenon; acropolis; Mao; soil; dirt; ground; human legs; walking legs,リョウ,みささぎ
亥,1519,1637,sign of the hog,sign of the hog,acorn; top hat,ガイ; カイ,い
核,1520,1638,nucleus,nucleus,tree; wood; sign of the hog; acorn; top hat,カク,
刻,1521,1639,engrave,engrave,sign of the hog; acorn; top hat; sword; sabre; saber,コク,きざ.む; きざ.み
該,1522,1640,above-stated,above-stated,say; words; keitai; mouth; sign of the hog; acorn; top hat,ガイ,
骸,2874,1641,remains,remains,skeleton; joint; moon; month; flesh; part of the body; sign of the hog; acorn; top hat,ガイ; カイ,むくろ
劾,1523,1642,censure,censure,sign of the hog; acorn; top hat; power; muscle; arnold,ガイ,
述,1524,1643,mention,mention,resin; pole; road,ジュツ,の.べる
術,1525,1644,art,art,boulevard; going; resin; pole,ジュツ,すべ
寒,1526,1645,cold,cold,Baba Yaga’s hut; house; celery; animal legs; ice,カン,さむ.い
塞,2214,1646,block up,block up,Baba Yaga’s hut; house; celery; animal legs; soil; dirt; ground,ソク; サイ,ふさ.ぐ; とりで; み.ちる
醸,1527,1647,brew,brew,whiskey bottle; grass skirt; top hat; eight; six; animal legs; celery; scarf,ジョウ,かも.す
譲,1528,1648,defer,defer,say; words; keitai; mouth; grass skirt; top hat; eight; six; animal legs; celery; scarf,ジョウ,ゆず.る
壌,1529,1649,lot,lot,soil; dirt; ground; grass skirt; top hat; eight; six; animal legs; celery; scarf,ジョウ,つち
嬢,1530,1650,lass,lass,woman; grass skirt; top hat; eight; six; animal legs; celery; scarf,ジョウ,むすめ
毒,1531,1651,poison,poison,grow up; mother; breasts,ドク,
素,1532,1652,elementary,elementary,grow up; thread; spiderman,ソ; ス,もと
麦,1533,1653,barley,barley,grow up; walking legs,バク,むぎ
青,1534,1654,blue,blue,grow up; moon; flesh,セイ; ショウ,あお; あお-; あお.い
精,1535,1655,refined,refined,rice; blue; grow up; moon; flesh,セイ; ショウ; シヤウ,
請,1536,1656,solicit,solicit,say; words; keitai; mouth; blue; grow up; moon; flesh,セイ; シン; ショウ,こ.う; う.ける
情,1537,1657,feelings,feelings,Freud; state of mind; blue; grow up; moon; flesh,ジョウ; セイ,なさ.け
晴,1538,1658,clear up,clear up,sun; day; blue; grow up; moon; flesh,セイ,は.れる; は.れ; は.れ-; -ば.れ; は.らす
清,1539,1659,pure,pure,water; water droplets; water pistol; blue; grow up; moon; flesh,セイ; ショウ; シン,きよ.い; きよ.まる; きよ.める
静,1540,1660,quiet,quiet,blue; grow up; moon; flesh; contend; bound up; rake,セイ; ジョウ,しず-; しず.か; しず.まる; しず.める
責,1541,1661,blame,blame,grow up; shellfish; clam; oyster; eye; animal legs; eight,セキ,せ.める
績,1542,1662,exploits,exploits,thread; spiderman; blame; grow up; shellfish; clam; oyster; eye; animal legs; eight,セキ,
積,1543,1663,volume,volume,wheat; cereal; blame; grow up; shellfish; clam; oyster; eye; animal legs; eight,セキ,つ.む; -づ.み; つ.もる; つ.もり
債,1544,1664,bond,bond,person; blame; grow up; shellfish; clam; oyster; eye; animal legs; eight,サイ,
漬,1545,1665,pickling,pickling,water; water droplets; water pistol; blame; grow up; shellfish; clam; oyster; eye; animal legs; eight,シ,つ.ける; つ.かる; -づ.け; -づけ
表,1546,1666,surface,surface,grow up; scarf,ヒョウ,おもて; -おもて; あらわ.す; あらわ.れる; あら.わす
俵,1547,1667,bag,bag,person; surface; grow up; scarf,ヒョウ,たわら
潔,1548,1668,undefiled,undefiled,water; water droplets; water pistol; flick knife; grow up; sword; dagger; thread; spiderman,ケツ,いさぎよ.い
契,1549,1669,pledge,pledge,flick knife; grow up; dagger; large; St. Bernard,ケイ,ちぎ.る
喫,1550,1670,consume,consume,mouth; pledge; flick knife; grow up; dagger; large; St. Bernard,キツ,
害,1551,1671,harm,harm,mansion; house; grow up; mouth,ガイ,
轄,1552,1672,control,control,car; harm; mansion; house; grow up; mouth,カツ,くさび
割,1553,1673,proportion,proportion,harm; mansion; house; grow up; mouth; sword; sabre; saber,カツ,わ.る; わり; わ.り; わ.れる; さ.く
憲,1554,1674,constitution,constitution,mansion; house; grow up; eye; cross-eyed; net; heart,ケン,
生,1555,1675,life,life,This is Your Life; cell; drop; grow up,セイ; ショウ,い.きる; い.かす; い.ける; う.まれる; う.まれ; うまれ; う.む; お.う; は.える; は.やす; き; なま; なま-; な.る; な.す; む.す; -う
星,1556,1676,star,star,sun; day; life; This is Your Life; cell; drop; grow up,セイ; ショウ,ほし; -ぼし
醒,2750,1677,awakening,awakening,whiskey bottle; star; sun; day; life; This is Your Life; cell; drop; grow up,セイ,さ.ます; さ.める
姓,1557,1678,surname,surname,woman; life; This is Your Life; cell; drop; grow up,セイ; ショウ,
性,1558,1679,sex,sex,Freud; state of mind; life; This is Your Life; cell; drop; grow up,セイ; ショウ,さが
牲,1559,1680,animal sacrifice,animal sacrifice,cow; life; This is Your Life; cell; drop; grow up,セイ,
産,1560,1681,products,products,vase; stand up; cliff; life; This is Your Life; cell; drop; grow up,サン,う.む; う.まれる; うぶ-; む.す
隆,1561,1682,hump,hump,pinnacle; parthenon; acropolis; walking legs; life; This is Your Life; cell; drop; grow up,リュウ,
峰,1562,1683,summit,summit,mountain; Segway; Macbeth; walking legs; bushes,ホウ,みね; ね
蜂,2687,1684,bee,bee,insect; Segway; Macbeth; walking legs; bushes,ホウ,はち
縫,1563,1685,sew,sew,thread; spiderman; tryst; Segway; Macbeth; walking legs; bushes; road,ホウ,ぬ.う
拝,1564,1686,worship,worship,finger; fingers; one; ceiling; bushes,ハイ,おが.む; おろが.む
寿,1565,1687,longevity,longevity,bushes; glue,ジュ; ス; シュウ,ことぶき; ことぶ.く; ことほ.ぐ
鋳,1566,1688,casting,casting,metal; gold; longevity; bushes; glue,チュウ; イ; シュ; シュウ,い.る
籍,1567,1689,enroll,enroll,bamboo; christmas tree; wood; once upon a time; storyteller,セキ,
春,1568,1690,springtime,springtime,bonsai; sun; day,シュン,はる
椿,1569,1691,camellia,camellia,tree; wood; springtime; bonsai; sun; day,チン; チュン,つばき
泰,1570,1692,peaceful,peaceful,bonsai; grains of rice,タイ,
奏,1571,1693,play music,play music,bonsai; heavens,ソウ,かな.でる
実,1572,1694,reality,reality,house; bonsai,ジツ; シツ,み; みの.る; まこと; まことに; みの; みち.る
奉,1573,1695,dedicate,dedicate,observance; bonsai; cornstalk,ホウ; ブ,たてまつ.る; まつ.る; ほう.ずる
俸,1574,1696,stipend,stipend,person; observance; dedicate; bonsai; cornstalk,ホウ,
棒,1575,1697,rod,rod,tree; wood; observance; dedicate; bonsai; cornstalk,ボウ,
謹,1576,1698,discreet,discreet,say; words; keitai; mouth; cabbage; flowers; mouth; grow up,キン,つつし.む
僅,2116,1699,trifle,trifle,person; cabbage; flowers; mouth; grow up,キン; ゴン,わずか
勤,1577,1700,diligence,diligence,cabbage; flowers; mouth; grow up; power; muscle; arnold,キン; ゴン,つと.める; -づと.め; つと.まる; いそ.しむ
漢,1578,1701,Sino-,Sino-,sino; water; water droplets; water pistol; scarecrow; flowers; mouth; husband,カン,
嘆,1579,1702,sigh,sigh,mouth; scarecrow; flowers; mouth; husband,タン,なげ.く; なげ.かわしい
難,1580,1703,difficult,difficult,scarecrow; flowers; mouth; husband; turkey,ナン,かた.い; -がた.い; むずか.しい; むづか.しい; むつか.しい; -にく.い
華,1581,1704,splendor,splendor,flowers; silage; ten; needle,カ; ケ,はな
垂,1582,1705,droop,droop,drop; silage; walking cane; stick; one; floor,スイ,た.れる; た.らす; た.れ; -た.れ; なんなんと.す
唾,2165,1706,saliva,saliva,mouth; droop; drop; silage; one; floor,ダ; タ,つば; つばき
睡,1583,1707,drowsy,drowsy,eye; droop; drop; silage; walking cane; stick; one; floor,スイ,
錘,1584,1708,spindle,spindle,metal; gold; droop; drop; silage; walking cane; stick; one; floor,スイ,つむ; おもり
乗,1585,1709,ride,ride,wheat; cereal; silage,ジョウ; ショウ,の.る; -の.り; の.せる
剰,1586,1710,surplus,surplus,ride; wheat; cereal; silage; sword; sabre; saber,ジョウ,あまつさえ; あま.り; あま.る
今,1587,1711,now,now,meeting; umbrella; one,コン; キン,いま
含,1588,1712,include,include,now; clock; mouth,ガン,ふく.む; ふく.める
貪,3023,1713,covet,covet,,タン; トン,むさぼ.る
吟,1589,1714,versify,versify,mouth; now; clock,ギン,
念,1590,1715,wish,wish,now; clock; heart,ネン,
捻,2251,1716,wrenching,wrench,finger; fingers; wish; wishbone; now; clock; heart,ネン; ジョウ,ね.じる; ねじ.る; ひね.くる; ひね.る
琴,1591,1717,harp,harp,king; jewel; ball; now; clock,キン,こと
陰,1592,1718,shade,shade,pinnacle; parthenon; acropolis; now; clock; rising cloud; two; elbow; wall,イン,かげ; かげ.る
予,1593,1719,beforehand,beforehand,halberd with stroke missing,ヨ; シャ,あらかじ.め
序,1594,1720,preface,preface,cave; beforehand,ジョ,つい.で; ついで
預,1595,1721,deposit,deposit,beforehand; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ヨ,あず.ける; あず.かる
野,1596,1722,plains,plains,computer; beforehand,ヤ; ショ,の; の-
兼,1597,1723,concurrently,concurrently,animal horns; rake; stick,ケン,か.ねる; -か.ねる
嫌,1598,1724,dislike,dislike,woman; concurrently; animal horns; rake,ケン; ゲン,きら.う; きら.い; いや
鎌,1599,1725,sickle,sickle,metal; gold; concurrently; animal horns; rake,レン; ケン,かま
謙,1600,1726,self-effacing,self-effacing,say; words; keitai; mouth; concurrently; animal horns; rake,ケン,
廉,1601,1727,bargain,bargain,cave; concurrently; animal horns; rake,レン,
西,1602,1728,west,west,one; four,セイ; サイ; ス,にし
価,1603,1729,value,value,person; old west,カ; ケ,あたい
要,1604,1730,need,need,old west; woman,ヨウ,い.る
腰,1605,1731,loins,loins,moon; month; flesh; part of the body; need; old west; woman,ヨウ,こし
票,1606,1732,ballot,ballot,old west; altar; show; two; small,ヒョウ,
漂,1607,1733,drift,drift,water; water droplets; water pistol; ballot; old west; altar; show; two; small,ヒョウ,ただよ.う
標,1608,1734,signpost,signpost,tree; wood; ballot; old west; altar; show; two; small,ヒョウ,しるべ; しるし
栗,1609,1735,chestnut,chestnut,old west; tree; wood,リツ; リ,くり; おののく
慄,3024,1736,shudder,shudder,,リツ,おそ.れる; おのの.く; ふる.える
遷,1610,1737,transition,transition,old west; large; St. Bernard; snake; self; road,セン,うつ.る; うつ.す; みやこがえ
覆,1611,1738,capsize,capsize,old west; restore; Nelson; column; going; line; fold back; double back; reclining; lying down; sun; day; walking legs,フク,おお.う; くつがえ.す; くつがえ.る
煙,1612,1739,smoke,smoke,hearth fire; old west; soil; dirt; ground,エン,けむ.る; けむり; けむ.い
南,1613,1740,south,south,ten; needle; belt; happiness; ten; needle; stand up; vase,ナン; ナ,みなみ
楠,1614,1741,camphor tree,camphor tree,tree; wood; south; ten; needle; belt; happiness; ten; needle; stand up; vase,ナン; ダン; ゼン; ネン,くす; くすのき
献,1615,1742,offering,offering,south; ten; needle; belt; happiness; ten; needle; stand up; vase; chihuahua; dog; large; drop,ケン; コン,たてまつ.る
門,1616,1743,gates,gates,,モン,かど; と
問,1617,1744,question,question,gates; mouth,モン,と.う; と.い; とん
閲,1618,1745,review,review,gates; devil; horns; elder brother; teenager; mouth; human legs,エツ,けみ.する
閥,1619,1746,clique,clique,gates; fell; person; fiesta,バツ,
間,1620,1747,interval,interval,gates; sun; day,カン; ケン,あいだ; ま; あい
闇,2777,1748,pitch dark,pitch dark,gates; sound; vase; stand up; sun; day,アン; オン,やみ; くら.い
簡,1621,1749,simplicity,simplicity,bamboo; interval; gates; sun; day,カン,
開,1622,1750,open,open,gates; two hands,カイ,ひら.く; ひら.き; -びら.き; ひら.ける; あ.く; あ.ける
閉,1623,1751,closed,closed,gates; genie,ヘイ,と.じる; と.ざす; し.める; し.まる; た.てる
閣,1624,1752,tower,tower,gates; each; walking legs; mouth,カク,
閑,1625,1753,leisure,leisure,gates; tree; wood,カン,
聞,1626,1754,hear,hear,gates; ear,ブン; モン,き.く; き.こえる
潤,1627,1755,wet,wet,water; water droplets; water pistol; intercalate; gates; king; jewel; ball,ジュン,うるお.う; うるお.す; うる.む
欄,1628,1756,column,column,tree; wood; gates; east; tree; wood; sun; day,ラン,てすり
闘,1629,1757,fight,fight,gates; beans; table; one; mouth; glue,トウ,たたか.う; あらそ.う
倉,1630,1758,godown,godown,meeting; single gate; umbrella; stable door; mouth,ソウ,くら
創,1631,1759,genesis,genesis,godown; meeting; single gate; umbrella; stable door; mouth; sword; sabre; saber,ソウ; ショウ,つく.る; はじ.める; きず; けず.しける
非,1632,1760,un-,un-,jail cell; prison bars,ヒ,あら.ず
俳,1633,1761,haiku,haiku,person; un-; jail cell; prison bars,ハイ,
排,1634,1762,repudiate,repudiate,finger; fingers; un-; jail cell; prison bars,ハイ,
悲,1635,1763,sad,sad,un-; jail cell; prison bars; heart,ヒ,かな.しい; かな.しむ
罪,1636,1764,guilt,guilt,eye; cross-eyed; net; un-; jail cell; prison bars,ザイ,つみ
輩,1637,1765,comrade,comrade,un-; jail cell; prison bars; car,ハイ,ともがら; -ばら; やかい; やから
扉,1638,1766,front door,front door,door; one; ceiling; flag; un-; jail cell; prison bars,ヒ,とびら
侯,1639,1767,marquis,marquis,person; key; dart; drop; heavens,コウ,
喉,2164,1768,throat,throat,mouth; marquis; person; key; dart; drop; heavens,コウ,のど
候,1640,1769,climate,climate,marquis; person; stick; fred astaire; key; dart; drop; heavens,コウ,そうろう
決,1641,1770,decide,decide,water; water droplets; water pistol; guillotine; key; St. Bernard,ケツ,き.める; -ぎ.め; き.まる; さ.く
快,1642,1771,cheerful,cheerful,Freud; state of mind; guillotine; key; St. Bernard,カイ,こころよ.い
偉,1643,1772,admirable,admirable,person; locket; stick; key; mouth; monocle; sunglasses with one lens missing,イ,えら.い
違,1644,1773,difference,difference,locket; stick; key; mouth; monocle; sunglasses with one lens missing; road,イ,ちが.う; ちが.い; ちが.える; -ちが.える; たが.う; たが.える
緯,1645,1774,horizontal,horizontal,thread; spiderman; locket; stick; key; mouth; monocle; sunglasses with one lens missing,イ,よこいと; ぬき
衛,1646,1775,defense,defense,defence; boulevard; going; locket; stick; key; mouth; monocle; sunglasses with one lens missing,エイ; エ,
韓,1647,1776,Korea,Korea,korea; mist; ten; needle; early; sun; day; locket; stick; key; mouth; monocle; sunglasses with one lens missing,カン,から; いげた
干,1648,1777,dry,dry,clothesline,カン,ほ.す; ほ.し-; -ぼ.し; ひ.る
肝,1649,1778,liver,liver,moon; month; flesh; part of the body; dry; clothesline,カン,きも
刊,1650,1779,publish,publish,dry; clothesline; sword; sabre; saber,カン,
汗,1651,1780,sweat,sweat,water; water droplets; water pistol; dry; clothesline,カン,あせ
軒,1652,1781,flats,flats,car; dry; clothesline,ケン,のき
岸,1653,1782,beach,beach,mountain; cliff; dry; clothesline,ガン,きし
幹,1654,1783,tree trunk,tree trunk,mist; ten; needle; early; sun; day; umbrella; dry; clothesline,カン,みき
芋,1655,1784,potato,potato,flowers,ウ,いも
宇,1656,1785,eaves,eaves,house; potato,ウ,
余,1657,1786,too much,too much,umbrella; potato; small,ヨ,あま.る; あま.り; あま.す; あんま.り
除,1658,1787,exclude,exclude,pinnacle; parthenon; acropolis; scales; too much; umbrella; potato; small,ジョ; ジ,のぞ.く; -よ.け
徐,1659,1788,gradually,gradually,Nelson; column; going; line; scales; too much; umbrella; potato; small,ジョ,おもむ.ろに
叙,1660,1789,confer,confer,scales; too much; umbrella; potato; small; crotch,ジョ,つい.ず; ついで
途,1661,1790,route,route,scales; too much; umbrella; potato; small; road,ト,みち
斜,1662,1791,diagonal,diagonal,scales; too much; umbrella; potato; small; mmeasuring cup; big dipper; The Plough; drop; ten; needle,シャ,なな.め; はす
塗,1663,1792,paint,paint,water; water droplets; water pistol; scales; too much; umbrella; potato; small; soil; dirt; ground,ト,ぬ.る; ぬ.り; まみ.れる
束,1664,1793,bundle,bundle,Chaplin; tree; wood; mouth,ソク,たば; たば.ねる; つか; つか.ねる
頼,1665,1794,trust,trust,bundle; Chaplin; tree; wood; mouth; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ライ,たの.む; たの.もしい; たよ.る
瀬,1666,1795,rapids,rapids,water; water droplets; water pistol; trust; bundle; Chaplin; tree; wood; mouth; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ライ,せ
勅,1667,1796,imperial order,imperial order,bundle; Chaplin; tree; wood; mouth; power; muscle; arnold,チョク,いまし.める; みことのり
疎,1668,1797,alienate,alienate,zoo; critters; stop; footprint; bundle; Chaplin; tree; wood; mouth,ソ; ショ,うと.い; うと.む; まば.ら
辣,3025,1798,bitter,bitter,,ラツ,から.い
速,1669,1799,quick,quick,bundle; Chaplin; tree; wood; mouth; road,ソク,はや.い; はや-; はや.める; すみ.やか
整,1670,1800,organize,organize,organise; bundle; Chaplin; tree; wood; mouth; taskmaster; correct; one; ceiling; stop; footprint,セイ,ととの.える; ととの.う
剣,1671,1801,saber,saber,sabre; awl; fit; meeting; umbrella; mouth; person; sword; sabre,ケン,つるぎ
険,1672,1802,precipitous,precipitous,pinnacle; parthenon; acropolis; awl; fit; meeting; umbrella; mouth; person,ケン,けわ.しい
検,1673,1803,examination,examination,tree; wood; awl; fit; meeting; umbrella; mouth; person,ケン,しら.べる
倹,1674,1804,frugal,frugal,person; awl; fit; meeting; umbrella; mouth; person,ケン,つま.しい; つづまやか
重,1675,1805,heavy,heavy,thousand; computer; rice field; brains; soil; dirt; ground,ジュウ; チョウ,え; おも.い; おも.り; おも.なう; かさ.ねる; かさ.なる; おも
動,1676,1806,move,move,heavy; thousand; ri; computer; power; muscle; arnold,ドウ,うご.く; うご.かす
腫,2467,1807,tumor,tumor,tumour; moon; month; flesh; part of the body; heavy; thousand; ri; computer,シュ; ショウ,は.れる; は.れ; は.らす; く.む; はれもの
勲,1677,1808,meritorious deed,meritorious deed,move; heavy; thousand; ri; computer; power; muscle; arnold; oven-fire; barbecue,クン,いさお
働,1678,1809,work,work,person; move; heavy; thousand; ri; computer; power; muscle; arnold,ドウ; リュク; リキ; ロク; リョク,はたら.く
種,1679,1810,species,species,wheat; cereal; heavy; thousand; ri; computer,シュ,たね; -ぐさ
衝,1680,1811,collide,collide,boulevard; going; heavy; thousand; ri; computer,ショウ,つ.く
薫,1681,1812,fragrant,fragrant,flowers; heavy; thousand; ri; computer; oven-fire; barbecue,クン,かお.る
病,1682,1813,ill,ill,sickness; hospital; third class; one; ceiling; inside,ビョウ; ヘイ,や.む; -や.み; やまい
痴,1683,1814,stupid,stupid,sickness; hospital; know; dart; drop; heavens; mouth,チ,し.れる; おろか
痘,1684,1815,pox,pox,sickness; hospital; beans; table; one; mouth,トウ,
症,1685,1816,symptoms,symptoms,sickness; hospital; correct; one; ceiling; stop; footprint,ショウ,
瘍,3026,1817,carbuncle,carbuncle,,ヨウ,かさ
痩,2577,1818,lose weight,lose weight,sickness; hospital; Buddha’s hand; monkey; sun; day; stick; crotch,ソウ; チュウ; シュウ; シュ,や.せる
疾,1686,1819,rapidly,rapidly,sickness; hospital; dart; drop; heavens,シツ,はや.い
嫉,2202,1820,envy,envy,woman; rapidly; sickness; hospital; dart; drop; heavens,シツ,そね.む; ねた.む; にく.む
痢,1687,1821,diarrhea,diarrhea,sickness; hospital; profit; wheat; cereal; sword; sabre; saber,リ,
痕,2578,1822,scar,scar,sickness; hospital; silver,コン,あと
疲,1688,1823,tired,tired,exhausted; sickness; hospital; pelt; branch; ten; needle; crotch; hook,ヒ,つか.れる; -づか.れ; つか.らす
疫,1689,1824,epidemic,epidemic,sickness; hospital; cruise missile; missile; wind; crotch,エキ; ヤク,
痛,1690,1825,pain,pain,sickness; hospital; pogo stick; chop-seal; hanko; utilise; utilize,ツウ,いた.い; いた.む; いた.ましい; いた.める
癖,1691,1826,mannerism,mannerism,sickness; hospital; ketchup; flag; mouth; spicy; stand up; vase; ten; needle,ヘキ,くせ; くせ.に
匿,1692,1827,hide,hide,box; young; flowers; right; by one’s side; mouth,トク,かくま.う
匠,1693,1828,artisan,artisan,box; axe,ショウ,たくみ
医,1694,1829,doctor,doctor,box; dart; drop; heavens,イ,い.やす; い.する; くすし
匹,1695,1830,equal,equal,box; human legs,ヒツ,ひき
区,1696,1831,ward,ward,box; sheaf,ク; オウ; コウ,
枢,1697,1832,hinge,hinge,tree; wood; ward; box; sheaf,スウ; シュ,とぼそ; からくり
殴,1698,1833,assault,assault,ward; box; sheaf; missile; cruise missile; wind; crotch,オウ,なぐ.る
欧,1699,1834,Europe,Europe,europe; ward; box; sheaf; lack; yawn,オウ,うた.う; は.く
抑,1700,1835,repress,repress,finger; fingers; stamp album; box; stamps,ヨク,おさ.える
仰,1701,1836,faceup,faceup,face up; person; stamp album; box; stamps,ギョウ; コウ,あお.ぐ; おお.せ; お.っしゃる; おっしゃ.る
迎,1702,1837,welcome,welcome,stamp album; box; stamps; road,ゲイ,むか.える
登,1703,1838,ascend,ascend,teepee; wigwam; beans; table; one; mouth,トウ; ト; ドウ; ショウ; チョウ,のぼ.る; あ.がる
澄,1704,1839,lucidity,lucidity,water; water droplets; water pistol; ascend; teepee; wigwam; beans; table; one; mouth,チョウ,す.む; す.ます; -す.ます
発,1705,1840,discharge,discharge,teepee; wigwam; two; human legs,ハツ; ホツ,た.つ; あば.く; おこ.る; つか.わす; はな.つ
廃,1706,1841,abolish,abolish,cave; dicharge; teepee; wigwam; two; human legs,ハイ,すた.れる; すた.る
僚,1707,1842,colleague,colleague,person; pup tent; large; St. Bernard; sun; day; small; little,リョウ,
瞭,2582,1843,obvious,obvious,eye; pup tent; large; St. Bernard; sun; day; small; little,リョウ,あきらか
寮,1708,1844,dormitory,dormitory,house; pup tent; large; St. Bernard; sun; day; small; little,リョウ,
療,1709,1845,heal,heal,sickness; hospital; pup tent; large; St. Bernard; sun; day; small; little,リョウ,
彫,1710,1846,carve,carve,circumference; running track; glass hood; earthenware jar; lidded crock; soil; dirt; ground; mouth; shape,チョウ,ほ.る; -ぼ.り
形,1711,1847,shape,shape,two hands,ケイ; ギョウ,かた; -がた; かたち; なり
影,1712,1848,shadow,shadow,scenery; sun; day; capital; tall; top hat; mouth; small; little; shape,エイ,かげ
杉,1713,1849,cedar,cedar,tree; wood; shape,サン,すぎ
彩,1714,1850,coloring,coloring,claw; vulture; grab; tree; wood; shape,サイ,いろど.る
彰,1715,1851,patent,patent,badge; vase; stand up; sunflower; early; sun; day; ten; needle; shape,ショウ,
彦,1716,1852,lad,lad,vase; stand up; cliff; shape,ゲン,ひこ
顔,1717,1853,face,face,lad; vase; stand up; cliff; shape; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ガン,かお
須,1718,1854,ought,ought,shape; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ス; シュ,すべから.く; すべし; ひげ; まつ; もち.いる; もと.める
膨,1719,1855,swell,swell,moon; month; flesh; part of the body; drum; samurai; beans; table; one; mouth; shape,ボウ,ふく.らむ; ふく.れる
参,1720,1856,visit,visit,nonplussed; elbow; large; St. Bernard; shape,サン; シン,まい.る; まい-; まじわる; みつ
惨,1721,1857,wretched,wretched,Freud; state of mind; nonplussed; visit; elbow; large; St. Bernard; shape,サン; ザン,みじ.め; いた.む; むご.い
修,1722,1858,discipline,discipline,person; stick; fred astaire; taskmaster; shape,シュウ; シュ,おさ.める; おさ.まる
珍,1723,1859,rare,rare,king; jewel; ball; parasol; umbrella; shape,チン,めずら.しい; たから
診,1724,1860,checkup,checkup,check up; say; words; keitai; mouth; parasol; umbrella; shape,シン,み.る
文,1725,1861,sentence,sentence,plaid; kilt; Billy Connolly,ブン; モン,ふみ; あや
対,1726,1862,vis-a-vis,vis-a-vis,sentence; plaid; kilt; Billy Connolly; glue,タイ; ツイ,あいて; こた.える; そろ.い; つれあ.い; なら.ぶ; むか.う
紋,1727,1863,family crest,family crest,thread; spiderman; sentence; plaid; kilt; Billy Connolly,モン,
蚊,1728,1864,mosquito,mosquito,insect; sentence; sentence; plaid; kilt; Billy Connolly,ブン,か
斑,2556,1865,speckled,speckled,king; jewel; ball; sentence; plaid; kilt; Billy Connolly,ハン,ふ; まだら
斉,1729,1866,adjusted,adjusted,sentence; plaid; kilt; Billy Connolly; two; fenceposts; cabers,セイ; サイ,そろ.う; ひと.しい; ひと.しく; あたる; はやい
剤,1730,1867,dose,dose,adjust; adjusted; sentence; plaid; kilt; Billy Connolly; two; fenceposts; cabers; sword; sabre; saber,ザイ; スイ; セイ,かる; けず.る
済,1731,1868,finish,finish,water; water droplets; water pistol; adjust; adjusted; sentence; plaid; kilt; Billy Connolly; two; fenceposts; cabers,サイ; セイ,す.む; -ず.み; -ずみ; す.まない; す.ます; -す.ます; すく.う; な.す; わたし; わた.る
斎,1732,1869,purification,purification,sentence; plaid; kilt; Billy Connolly; fenceposts; cabers; altar; show; two; small,サイ,とき; つつし.む; ものいみ; い.む; いわ.う; いつ.く
粛,1733,1870,solemn,solemn,rake; fenceposts; cabers; rice,シュク; スク,つつし.む
塁,1734,1871,bases,bases,rice field; brains; sparkler; soil; dirt; ground,ルイ; ライ; スイ,とりで
楽,1735,1872,music,music,white; dove; sparkler; tree; wood,ガク; ラク; ゴウ,たの.しい; たの.しむ; この.む
薬,1736,1873,medicine,medicine,flowers; music; white; dove; sparkler; tree; wood,ヤク,くすり
率,1737,1874,ratio,ratio,mysterious; question mark; top hat; cocoon; sparkler; ten; needle,ソツ; リツ; シュツ,ひき.いる
渋,1738,1875,astringent,astringent,water; water droplets; water pistol; stop; footprint; sparkler,ジュウ; シュウ,しぶ; しぶ.い; しぶ.る
摂,1739,1876,vicarious,vicarious,finger; fingers; ear; sparkler,セツ; ショウ,おさ.める; かね.る; と.る
央,1740,1877,center,center,large; St. Bernard; box body,オウ,
英,1741,1878,England,England,flowers; centre; center; large; St. Bernard,エイ,はなぶさ
映,1742,1879,reflect,reflect,sun; day; centre; center; large; St. Bernard,エイ,うつ.る; うつ.す; は.える; -ば.え
赤,1743,1880,red,red,soil; dirt; ground; sword; dagger; small,セキ; シャク,あか; あか-; あか.い; あか.らむ; あか.らめる
赦,1744,1881,pardon,pardon,red; taskmaster,シャ,
変,1745,1882,unusual,unusual,apple; walking legs,ヘン,か.わる; か.わり; か.える
跡,1746,1883,tracks,tracks,wooden leg; mouth; stop; footprint; apple,セキ,あと
蛮,1747,1884,barbarian,barbarian,apple; insect,バン,えびす
恋,1748,1885,romance,romance,apple; heart,レン,こ.う; こい; こい.しい
湾,1749,1886,gulf,gulf,water; water droplets; water pistol; apple; bow,ワン,いりえ
黄,1750,1887,yellow,yellow,salad; sprout; shoot; animal legs; eight,コウ; オウ,き; こ-
横,1751,1888,sideways,sideways,tree; wood; yellow; salad; sprout; shoot; animal legs; eight,オウ,よこ
把,1752,1889,grasp,grasp,finger; fingers; mosaic,ハ; ワ,
色,1753,1890,color,color,bound up; mosaic,ショク; シキ,いろ
絶,1754,1891,discontinue,discontinue,thread; spiderman; colour; color; bound up; mosaic,ゼツ,た.える; た.やす; た.つ
艶,1755,1892,glossy,glossy,bountiful; bend; beans; table; one; mouth; colour; color; bound up; mosaic,エン,つや; なま.めかしい; あで.やか; つや.めく; なま.めく
肥,1756,1893,fertilizer,fertilizer,moon; month; flesh; part of the body; mosaic,ヒ,こ.える; こえ; こ.やす; こ.やし; ふと.る
甘,1757,1894,sweet,sweet,wicker basket; picnic basket,カン,あま.い; あま.える; あま.やかす; うま.い
紺,1758,1895,navy blue,navy blue,thread; spiderman; sweet; wicker basket; picnic basket,コン,
某,1759,1896,so-and-so,so-and-so,sweet; wicker basket; picnic basket; tree; wood,ボウ,それがし; なにがし
謀,1760,1897,conspire,conspire,say; words; keitai; mouth; so-and-so; sweet; wicker basket; picnic basket; tree; wood,ボウ; ム,はか.る; たばか.る; はかりごと
媒,1761,1898,mediator,mediator,woman; so-and-so; sweet; wicker basket; picnic basket; tree; wood,バイ,なこうど
欺,1762,1899,deceit,deceit,bushel basket; hamper; animal legs; eight; lack; yawn,ギ,あざむ.く
棋,1763,1900,chess piece,chess piece,tree; wood; bushel basket; hamper; animal legs; eight,キ,ご
旗,1764,1901,national flag,national flag,banner; compass; direction reclining; lying down; bushel basket; hamper; animal legs; eight,キ,はた
期,1765,1902,period,period,bushel basket; hamper; animal legs; eight; moon; month; flesh; part of the body,キ; ゴ,
碁,1766,1903,Go,Go,go; bushel basket; hamper; animal legs; eight; stone; rock,ゴ,
基,1767,1904,fundamentals,fundamentals,bushel basket; hamper; animal legs; eight; soil; dirt; ground,キ,もと; もとい
甚,1768,1905,tremendously,tremendously,bushel basket; hamper; equal; human legs,ジン,はなは.だ; はなは.だしい
勘,1769,1906,intuition,intuition,tremendously; bushel basket; hamper; equal; human legs; power; muscle; arnold,カン,
堪,1770,1907,withstand,withstand,soil; dirt; ground; tremendously; bushel basket; hamper; equal; human legs,カン; タン,た.える; たま.る; こ.らえる; こた.える
貴,1771,1908,precious,precious,Takanohana; purse; in; one; floor; shellfish; clam; oyster; eye; animal legs; eight,キ,たっと.い; とうと.い; たっと.ぶ; とうと.ぶ
遺,1772,1909,bequeath,bequeath,precious; Takanohana; purse; in; one; floor; shellfish; clam; oyster; eye; animal legs; eight; road,イ; ユイ,のこ.す
遣,1773,1910,dispatch,dispatch,purse; in; one; floor; maestro without baton; road,ケン,つか.う; -つか.い; -づか.い; つか.わす; や.る
潰,2319,1911,defile,defile,water; water droplets; water pistol; precious; Takanohana; purse; in; one; floor; shellfish; clam; oyster; eye; animal legs; eight,カイ; エ,つぶ.す; つぶ.れる; つい.える
舞,1774,1912,dance,dance,reclining; lying down; tub; sunglasses; dancing legs; ballerina; evening,ブ,ま.う; -ま.う; まい
無,1775,1913,nothingness,nothingness,reclining; lying down; tub; oven-fire; barbecue,ム; ブ,な.い
組,1776,1914,association,association,thread; spiderman; shelf; my bookshelves,ソ,く.む; くみ; -ぐみ
粗,1777,1915,coarse,coarse,rice; shelf; my bookshelves,ソ,あら.い; あら-
租,1778,1916,tariff,tariff,wheat; cereal; shelf; my bookshelves,ソ,
狙,2344,1917,aim at,aim at,pack of wild dogs; shelf; my bookshelves,ソ; ショ,ねら.う; ねら.い
祖,1779,1918,ancestor,ancestor,altar; shelf; my bookshelves,ソ,
阻,1780,1919,thwart,thwart,pinnacle; parthenon; acropolis; shelf; my bookshelves,ソ,はば.む
査,1781,1920,investigate,investigate,tree; wood; shelf; my bookshelves,サ,
助,1782,1921,help,help,shelf; my bookshelves; power; muscle; arnold,ジョ,たす.ける; たす.かる; す.ける; すけ
宜,1783,1922,best regards,best regards,house; shelf; my bookshelves,ギ,よろ.しい; よろ.しく
畳,1784,1923,tatami mat,tatami mat,rice field; brains; crown; shelf; my bookshelves,ジョウ; チョウ,たた.む; たたみ; かさ.なる
並,1785,1924,row,row,,ヘイ; ホウ,な.み; なら.べる; なら.ぶ; なら.びに
普,1786,1925,universal,universal,row; sun; day,フ,あまね.く; あまねし
譜,1787,1926,musical score,musical score,say; words; keitai; mouth; universal; row; sun; day,フ,
湿,1788,1927,damp,damp,water; water droplets; water pistol; sun; day; row,シツ; シュウ,しめ.る; しめ.す; うるお.う; うるお.す
顕,1789,1928,appear,appear,sun; day; row; head; page; one; ceiling; drop; shellfish; clam; oyster; eye; animal legs; eight,ケン,あきらか; あらわ.れる
繊,1790,1929,slender,slender,thread; spiderman; Thanksgiving; harvest festival; ten; needle; fiesta; row,セン,
霊,1791,1930,spirits,spirits,rain; weather; two; row,レイ; リョウ,たま
業,1792,1931,profession,profession,business; upside down in a row; not yet; tree; wood,ギョウ; ゴウ,わざ
撲,1793,1932,slap,slap,finger; fingers; upside down in a row; husband,ボク,
僕,1794,1933,me,me,person; upside down in a row; husband,ボク,しもべ
共,1795,1934,together,together,salad; animal legs; eight,キョウ,とも; とも.に; -ども
供,1796,1935,submit,submit,person; strung together; salad; animal legs; eight,キョウ; ク; クウ; グ,そな.える; とも; -ども
異,1797,1936,uncommon,uncommon,rice field; brains; strung together; salad; animal legs; eight,イ,こと; こと.なる; け
翼,1798,1937,wing,wing,feathers; wings; uncommon; rice field; brains; strung together; salad; animal legs; eight,ヨク,つばさ
戴,2702,1938,accept humbly,accept humbly,Thanksgiving; harvest festival; ten; needle; fiesta; uncommon; rice field; brains; strung together; salad; animal legs; eight,タイ,いただ.く
洪,1799,1939,deluge,deluge,water; water droplets; water pistol; strung together; salad; animal legs; eight,コウ,
港,1800,1940,harbor,harbor,deluge; water; water droplets; water pistol; scene; strung together; salad; animal legs; eight; snake; self,コウ,みなと
暴,1801,1941,outburst,outburst,sun; day; strung together; salad; animal legs; eight; grains of rice,ボウ; バク,あば.く; あば.れる
爆,1802,1942,bomb,bomb,fire; outburst; strung together; salad; animal legs; eight; grains of rice,バク,は.ぜる
恭,1803,1943,respect,respect,strung together; salad; animal legs; eight; valentine,キョウ,うやうや.しい
選,1804,1944,elect,elect,southeast; snake; self; strung together; salad; animal legs; eight; road,セン,えら.ぶ
殿,1805,1945,Mr.,Mr.,Mr; flag; strung together; salad; animal legs; eight; cruise missile; missile; wind; crotch,デン; テン,との; -どの
井,1806,1946,well,well,,セイ; ショウ,い
丼,2884,1947,domburi,donburi,well; drop,トン; タン; ショウ; セイ,どんぶり
囲,1807,1948,surround,surround,pent in; well,イ,かこ.む; かこ.う; かこ.い
耕,1808,1949,till,till,christmas tree; well,コウ,たがや.す
亜,1809,1950,Asia,Asia,roman two; mouth,ア; アシア,つ.ぐ
悪,1810,1951,bad,bad,Asia; roman two; mouth; heart,アク; オ,わる.い; わる-; あ.し; にく.い; -にく.い; ああ; いずくに; いずくんぞ; にく.む
円,1811,1952,circle,circle,yen,エン,まる.い; まる; まど; まど.か; まろ.やか
角,1812,1953,angle,angle,bound up; glass canopy; hood; walking cane; stick; two,カク,かど; つの
触,1813,1954,contact,contact,angle; bound up; glass canopy; hood; walking cane; stick; two; insect,ショク,ふ.れる; さわ.る; さわ
解,1814,1955,unravel,unravel,angle; bound up; glass canopy; hood; walking cane; stick; two; sword; dagger; cow,カイ; ゲ,と.く; と.かす; と.ける; ほど.く; ほど.ける; わか.る; さと.る
再,1815,1956,again,again,king; jewel; ball; belt,サイ; サ,ふたた.び
講,1816,1957,lecture,lecture,say; words; keitai; mouth; funnel; cone; celery; again,コウ,
購,1817,1958,subscription,subscription,shellfish; clam; oyster; eye; animal legs; eight; funnel; cone; celery; again,コウ,
構,1818,1959,posture,posture,tree; wood; funnel; cone; celery; again,コウ,かま.える; かま.う
溝,1819,1960,gutter,gutter,water; water droplets; water pistol; funnel; cone; celery; again,コウ,みぞ
論,1820,1961,argument,argument,say; words; keitai; mouth; post-it note; meeting; scrapbook; glass canopy; hood; flowers,ロン,
倫,1821,1962,ethics,ethics,person; post-it note; meeting; scrapbook; glass canopy; hood; flowers,リン,
輪,1822,1963,wheel,wheel,car; post-it note; meeting; scrapbook; glass canopy; hood; flowers,リン,わ
偏,1823,1964,partial,partial,person; fishfinger; door; one; ceiling; flag; scrapbook; glass canopy; hood; flowers,ヘン,かたよ.る
遍,1824,1965,everywhere,everywhere,fishfinger; door; one; ceiling; flag; scrapbook; glass canopy; hood; flowers; road,ヘン,あまね.く
編,1825,1966,compilation,compilation,thread; spiderman; fishfinger; door; one; ceiling; flag; scrapbook; glass canopy; hood; flowers,ヘン,あ.む; -あ.み
冊,1826,1967,tome,tome,,サツ; サク,ふみ
柵,2507,1968,palisade,palisade,tree; wood; tome,サク; サン,しがら.む; しがらみ; とりで; やらい
典,1827,1969,code,code,bend; tool,テン; デン,
氏,1828,1970,family name,family name,drop; fishhook,シ,うじ; -うじ
紙,1829,1971,paper,paper,thread; spiderman; family name,シ,かみ
婚,1830,1972,marriage,marriage,woman; dusk; family name; day,コン,
低,1831,1973,lower,lower,person; calling card; family name; one; floor,テイ,ひく.い; ひく.める; ひく.まる
抵,1832,1974,resist,resist,finger; fingers; calling card; family name; one; floor,テイ,
底,1833,1975,bottom,bottom,cave; calling card; family name; one; floor,テイ,そこ
民,1834,1976,people,people,mouth; family name,ミン,たみ
眠,1835,1977,sleep,sleep,eye; people; mouth; family name,ミン,ねむ.る; ねむ.い
捕,1836,1978,catch,catch,finger; fingers; dog-tag; arrowhead; screwdriver; utilize; utilise,ホ,と.らえる; と.らわれる; と.る; とら.える; とら.われる; つか.まえる; つか.まる
哺,3027,1979,suckle,suckle,,ホ,はぐく.む; ふく.む
浦,1837,1980,bay,bay,water; water droplets; water pistol; dog-tag; arrowhead; screwdriver; utilize; utilise,ホ,うら
蒲,1838,1981,bullrush,bullrush,bulrush; flowers; bay; water; water droplets; water pistol; dog-tag; arrowhead; screwdriver; utilize; utilise,ホ; ボ; フ; ブ,がま; かば; かま
舗,1839,1982,shop,shop,cottage; little-thatch; umbrella; earthenware jar; lidded crock; soil; dirt; ground; mouth; dog-tag; arrowhead; screwdriver; utilize; utilise,ホ,
補,1840,1983,supplement,supplement,cloak; dog-tag; arrowhead; screwdriver; utilize; utilise,ホ,おぎな.う
邸,1841,1984,residence,residence,calling card; family name; one; floor; city walls,テイ,やしき
郭,1842,1985,enclosure,enclosure,receive; tall; top hat; mouth; child; children; city walls,カク,くるわ
郡,1843,1986,county,county,old boy; mop; mouth; city walls,グン,こうり
郊,1844,1987,outskirts,outskirts,mingle; top hat; father; city walls,コウ,
部,1845,1988,section,section,muzzle; vase; stand up; mouth; city walls,ブ,-べ
都,1846,1989,metropolis,metropolis,someone; puppet; sooty; old man; sun; day; city walls,ト; ツ,みやこ
郵,1847,1990,mail,mail,droop; silage; city walls,ユウ,
邦,1848,1991,home country,home country,bushes; city walls,ホウ,くに
那,2960,1992,interrogative,interrogative,sword; dagger; two; city walls,ナ; ダ,なに; なんぞ; いかん
郷,1849,1993,hometown,hometown,home town; cocoon; silver; city walls,キョウ; ゴウ,さと
響,1850,1994,echo,echo,home town; cocoon; silver; city walls; sound; vase; stand up; sun; day; tongue wagging,キョウ,ひび.く
郎,1851,1995,son,son,halo; good; drop; silver; city walls,ロウ; リョウ,おとこ
廊,1852,1996,corridor,corridor,cave; son; halo; good; drop; silver; city walls,ロウ,
盾,1853,1997,shield,shield,drag; ten; needle; eye,ジュン,たて
循,1854,1998,sequential,sequential,Nelson; column; going; line; shield; drag; ten; needle; eye,ジュン,
派,1855,1999,faction,faction,water; water droplets; water pistol; caveman; drag; person; rag,ハ,
脈,1856,2000,vein,vein,moon; month; flesh; part of the body; caveman; drag; person; rag,ミャク,すじ
衆,1857,2001,masses,masses,blood; drop; dish; Carol in rags person; rag,シュウ; シュ,おお.い
逓,1858,2002,parcel post,parcel post,drag; cornstalk; belt; road,テイ,かわ.る; たがいに
段,1859,2003,grade,grade,staple gun; cruise missile; missile; wind; crotch,ダン; タン,
鍛,1860,2004,forge,forge,metal; gold; grade; staple gun; cruise missile; missile; wind; crotch,タン,きた.える
后,1861,2005,empress,empress,drag; one; ceiling; mouth,コウ; ゴ,きさき
幻,1862,2006,phantasm,phantasm,cocoon; clothes hanger; coat hanger,ゲン,まぼろし
司,1863,2007,director,director,clothes hanger; coat hanger; one; mouth,シ,つかさど.る
伺,1864,2008,pay respects,pay respects,person; director; Ken Russel; clothes hanger; coat hanger; one; mouth,シ,うかが.う
詞,1865,2009,parts of speech,parts of speech,part of speech; say; words; keitai; mouth; director; Ken Russel; clothes hanger; coat hanger; one; mouth,シ,
飼,1866,2010,domesticate,domesticate,eat; food; umbrella; good; halo; drop; silver; director; Ken Russel; clothes hanger; coat hanger; one; mouth,シ,か.う
嗣,1867,2011,heir,heir,mouth; scrapbook; glass canopy; hood; flowers; director; Ken Russel; clothes hanger; coat hanger; one; mouth,シ,
舟,1868,2012,boat,boat,,シュウ,ふね; ふな-; -ぶね
舶,1869,2013,liner,liner,boat; white; dove,ハク,
航,1870,2014,navigate,navigate,boat; whirlwind; top hat; wind,コウ,
舷,2675,2015,gunwale,gunwale,boat; mysterious; top hat; cocoon,ゲン,ふなべい; ふなばた
般,1871,2016,carrier,carrier,boat; cruise missile; missile; wind; crotch,ハン,
盤,1872,2017,tray,tray,carrier; boat; cruise missile; missile; wind; crotch; dish,バン,
搬,1873,2018,conveyor,conveyor,finger; fingers; carrier; boat; cruise missile; missile; wind; crotch,ハン,
船,1874,2019,ship,ship,boat; gully; eight; mouth,セン,ふね; ふな-
艦,1875,2020,warship,warship,boat; oversee; retainer; slave; reclining; lying down; one; floor; dish,カン,
艇,1876,2021,rowboat,rowboat,boat; courts; porter; drop; samurai; stretch,テイ,
瓜,1877,2022,melon,melon,claw; vulture; elbow,カ; ケ,うり
弧,1878,2023,arc,arc,bow; melon; claw; vulture; elbow,コ,
孤,1879,2024,orphan,orphan,child; melon; claw; vulture; elbow,コ,
繭,1880,2025,cocoon,cocoon,flowers; hood; stick; thread; spiderman; insect,ケン,まゆ; きぬ
益,1881,2026,benefit,benefit,animal horns; one; floor; animal legs; eight; dish,エキ; ヤク,ま.す
暇,1882,2027,spare time,spare time,sun; day; hobby; staples; mouth; box; crotch,カ,ひま; いとま
敷,1883,2028,spread,spread,arrowhead; rice field; brains; compass; direction; taskmaster,フ,し.く; -し.き
来,1884,2029,come,come,not yet; animal horns,ライ; タイ,く.る; きた.る; きた.す; き.たす; き.たる; き; こ
気,1885,2030,spirit,spirit,landed fish; reclining; lying down; one; floor; fishhook; sheaf,キ; ケ,いき
汽,1886,2031,vapor,vapor,water; water droplets; water pistol; landed fish; reclining; lying down; one; floor; fishhook,キ,
飛,1887,2032,fly,fly,hook; propeller; measuring box; thousand; needles,ヒ,と.ぶ; と.ばす; -と.ばす
沈,1888,2033,sink,sink,water; water droplets; water pistol; garter; crown; human legs,チン; ジン,しず.む; しず.める
枕,2472,2034,pillow,pillow,tree; wood; garter; crown; human legs,チン; シン,まくら
妻,1889,2035,wife,wife,ten; needle; rake; woman,サイ,つま
凄,2133,2036,nifty,nifty,ice; wife; ten; needle; rake; woman,セイ; サイ,さむ.い; すご.い; すさ.まじい
衰,1890,2037,decline,decline,pathetic; stick; top hat; scarf; mouth,スイ,おとろ.える
衷,1891,2038,inmost,inmost,ten; needle; mouth; scarf,チュウ,
面,1892,2039,mask,mask,hundred; one; ceiling; drop; pent in; eye,メン; ベン,おも; おもて; つら
麺,2752,2040,noodles,noodles,barley; grow up; walking legs; mask; hundred; one; ceiling; drop; pent in; eye,メン; ベン,むぎこ
革,1893,2041,leather,leather,flowers; car; mouth; ten; needle,カク,かわ
靴,1894,2042,shoes,shoes,leather; flowers; car; mouth; ten; needle; change; person; spoon; sitting on the ground,カ,くつ
覇,1895,2043,hegemony,hegemony,old west; leather; flowers; car; mouth; ten; needle; moon; month; flesh; part of the body,ハ; ハク,はたがしら
声,1896,2044,voice,voice,samurai; flag; stick,セイ; ショウ,こえ; こわ-
眉,2583,2045,eyebrow,eyebrow,flag; stick; eye,ビ; ミ,まゆ
呉,1897,2046,give,give,mouth; chair; tool; animal legs,ゴ,く.れる; くれ
娯,1898,2047,recreation,recreation,woman; give; mouth; chair; tool; animal legs,ゴ,
誤,1899,2048,mistake,mistake,say; words; keitai; mouth; give; mouth; chair; tool; animal legs,ゴ,あやま.る; -あやま.る
蒸,1900,2049,steam,steam,flowers; helping hand; complete; water; one; floor; oven-fire; barbecue,ジョウ; セイ,む.す; む.れる; む.らす
承,1901,2050,acquiesce,acquiesce,water; complete; three,ショウ; ジョウ,うけたまわ.る; う.ける; ささ.げる; とど.める; たす.ける; こ.らす; つい.で; すく.う
函,1902,2051,bin,bin,snare; sparkler; shovel,カン,はこ; い.れる
極,1903,2052,poles,poles,decay; tree; wood; snare; mouth; crotch; one; floor,キョク; ゴク,きわ.める; きわ.まる; きわ.まり; きわ.み; き.める; -ぎ.め; き.まる
牙,1904,2053,tusk,tusk,,ガ; ゲ,きば; は; きばへん
芽,1905,2054,bud,bud,flowers; tusk,ガ,め
邪,1906,2055,wicked,wicked,tusk; city walls,ジャ,よこし.ま
雅,1907,2056,gracious,gracious,tusk; turkey,ガ,みや.び
釈,1908,2057,explanation,interpretation,animal tracks; drop; rice; shaku-hachi; flag; stick,シャク; セキ,とく; す.てる; ゆる.す
番,1909,2058,turn,turn,dice; animal tracks; drop; rice; rice field; brains,バン,つが.い
審,1910,2059,hearing,hearing,house; dice; animal tracks; drop; rice; rice field; brains,シン,つまび.らか; つぶさ.に
翻,1911,2060,flip,flip,dice; animal tracks; drop; rice; rice field; brains; feathers; wings,ホン; ハン,ひるがえ.る; ひるがえ.す
藩,1912,2061,clan,clan,flowers; water; water droplets; water pistol; dice; animal tracks; drop; rice; rice field; brains,ハン,
毛,1913,2062,fur,fur,,モウ,け
耗,1914,2063,decrease,decrease,christmas tree; fur,モウ; コウ; カウ,
尾,1915,2064,tail,tail,flag; fur,ビ,お
宅,1916,2065,home,home,house; lock of hair,タク,
託,1917,2066,consign,consign,say; words; keitai; mouth; lock of hair,タク,かこつ.ける; かこ.つ; かこ.つける
為,1918,2067,do,do,so; strange building; tail feathers,イ,ため; な.る; な.す; す.る; たり; つく.る; なり
偽,1919,2068,falsehood,falsehood,person; do; so; strange building; tail feathers,ギ; カ,いつわ.る; にせ; いつわ.り
畏,2569,2069,apprehensive,apprehensive,rice field; brains; hairpin; safety-pin,イ,おそ.れる; かしこ.まる; かしこ; かしこ.し
長,1920,2070,long,long,hair; hairpin; safety-pin,チョウ,なが.い; おさ
張,1921,2071,lengthen,lengthen,bow; long,チョウ,は.る; -は.り; -ば.り
帳,1922,2072,notebook,notebook,towel; long,チョウ,とばり
脹,1923,2073,dilate,dilate,moon; month; flesh; part of the body; long,チョウ,は.れる; ふく.らむ; ふく.れる
髪,1924,2074,hair of the head,hair of the head,hairstyle; hair; shape; friend,ハツ,かみ
展,1925,2075,unfold,unfold,flag; salad; hairpin; safety-pin,テン,
喪,1926,2076,miss,miss,soil; dirt; ground; mouth; hairpin; safety-pin,ソウ,も
巣,1927,2077,nest,nest,owl; fruit; rice field; brains; tree; wood,ソウ,す; す.くう
単,1928,2078,simple,simple,owl; rice field; brains; ten; needle,タン,ひとえ
戦,1929,2079,war,war,simple; owl; rice field; brains; ten; needle; fiesta,セン,いくさ; たたか.う; おのの.く; そよぐ; わなな.く
禅,1930,2080,Zen,Zen,zen; altar; simple; owl; rice field; brains; ten; needle,ゼン; セン,しずか; ゆず.る
弾,1931,2081,bullet,bullet,bow; simple; owl; rice field; brains; ten; needle,ダン; タン,ひ.く; -ひ.き; はず.む; たま; はじ.く; はじ.ける; ただ.す; はじ.きゆみ
桜,1932,2082,cherry tree,cherry tree,tree; wood; owl; woman,オウ; ヨウ,さくら
獣,1933,2083,animal,animal,owl; rice field; brains; one; mouth; chihuahua; dog; large; drop,ジュウ,けもの; けだもの
脳,1934,2084,brain,brain,moon; month; flesh; part of the body; owl; villain; sheaf; shovel,ノウ; ドウ,のうずる
悩,1935,2085,trouble,trouble,Freud; state of mind; owl; villain; sheaf; shovel,ノウ,なや.む; なや.ます; なや.ましい; なやみ
厳,1936,2086,stern,stern,owl; cliff; daring; spike; ear; taskmaster,ゲン; ゴン,おごそ.か; きび.しい; いか.めしい; いつくし
鎖,1937,2087,chain,chain,metal; gold; small; shellfish; clam; oyster; eye; animal legs; eight,サ,くさり; とざ.す
挙,1938,2088,raise,raise,owl; tool; hand,キョ,あ.げる; あ.がる; こぞ.る
誉,1939,2089,reputation,reputation,owl; tool; say; words; keitai; mouth,ヨ,ほま.れ; ほ.める
猟,1940,2090,game hunting,game hunting,pack of wild dogs; anemometer; owl; wind; cornstalk,リョウ; レフ,かり; か.る
鳥,1941,2091,bird,bird,white; dove; one; tail feathers,チョウ,とり
鳴,1942,2092,chirp,chirp,mouth; bird,メイ,な.く; な.る; な.らす
鶴,1943,2093,crane,crane,turkey house; bird,カク,つる
烏,1944,2094,crow,crow,drop; mouth; one; tail feathers,ウ; オ,からす; いずくんぞ; なんぞ
蔦,1945,2095,vine,vine,flowers; bird,チョウ,つた
鳩,1946,2096,pigeon,pigeon,nine; baseball; bird,キュウ; ク,はと; あつ.める
鶏,1947,2097,chicken,chicken,claw; vulture; husband; bird,ケイ,にわとり; とり
島,1948,2098,island,island,bird; mountain,トウ,しま
暖,1949,2099,warmth,warmth,sun; day; migrating ducks; claw; vulture; one; friend,ダン; ノン,あたた.か; あたた.かい; あたた.まる; あたた.める
媛,1950,2100,beautiful woman,beautiful woman,woman; migrating ducks; claw; vulture; one; friend,エン,ひめ
援,1951,2101,abet,abet,finger; fingers; migrating ducks; claw; vulture; one; friend,エン,
緩,1952,2102,slacken,slacken,thread; spiderman; migrating ducks; claw; vulture; one; friend,カン,ゆる.い; ゆる.やか; ゆる.む; ゆる.める
属,1953,2103,belong,belong,flag; gnats; drop; insect; belt,ゾク; ショク,さかん; つく; やから
嘱,1954,2104,entrust,entrust,mouth; belong; flag; gnats; drop; insect; belt,ショク,しょく.する; たの.む
偶,1955,2105,accidentally,accidentally,person; talking cricket; brains; insect; belt,グウ,たま
遇,1956,2106,interview,interview,talking cricket; brains; insect; belt; road,グウ,あ.う
愚,1957,2107,foolish,foolish,talking cricket; brains; insect; belt; heart,グ,おろ.か
隅,1958,2108,corner,corner,pinnacle; parthenon; acropolis; talking cricket; brains; insect; belt,グウ,すみ
逆,1959,2109,inverted,inverted,mountain goat; horns; mountain; road,ギャク; ゲキ,さか; さか.さ; さか.らう
塑,1960,2110,model,model,first day of the month; mountain goat; horns; mountain; moon; month; flesh; part of the body; soil; dirt; ground,ソ,でく
遡,2847,2111,go upstream,go upstream,first day of the month; mountain goat; horns; mountain; moon; month; flesh; part of the body; road,ソ; サク,さかのぼ.る
岡,1961,2112,Mount,Mount,mount; glass canopy; hood; mountain goat; horns; mountain,コウ,おか
鋼,1962,2113,steel,steel,metal; gold; mount,コウ,はがね
綱,1963,2114,hawser,hawser,thread; spiderman; mount,コウ,つな
剛,1964,2115,sturdy,sturdy,mount; sword; sabre; saber,ゴウ,
缶,1965,2116,tin can,tin can,noon; sign of the horse; shovel,カン,かま
陶,1966,2117,pottery,pottery,pinnacle; parthenon; acropolis; bound up; tin can; noon; sign of the horse; shovel,トウ,
揺,1967,2118,swing,swing,finger; fingers; condor; claw; vulture; king; mountain,ヨウ,ゆ.れる; ゆ.る; ゆ.らぐ; ゆ.るぐ; ゆ.する; ゆ.さぶる; ゆ.すぶる; うご.く
謡,1968,2119,Noh chanting,Noh chanting,noh chanting; say; words; keitai; mouth; condor; claw; vulture; king; mountain,ヨウ,うた.い; うた.う
鬱,3030,2120,gloom,gloom,,ウツ,うっ.する; しげ.る; ふさ.ぐ
就,1969,2121,concerning,concerning,capital; tall; top hat; mouth; small; little; understandably; chihuahua with one human leg,シュウ; ジュ,つ.く; つ.ける
蹴,2742,2122,kick,kick,wooden leg; mouth; stop; footprint; concerning; capital; tall; top hat; mouth; small; little; understandably; chihuahua with one human leg,シュク; シュウ,け.る
懇,1970,2123,sociable,sociable,skunk; silver; heart,コン,ねんご.ろ
墾,1971,2124,groundbreaking,groundbreaking,skunk; silver; soil; dirt; ground,コン,
貌,2733,2125,countenance,countenance,skunk; badger; white; dove; human legs,ボウ; バク,かたち; かたどる
免,1972,2126,excuse,excuse,village stocks; rabbit; bound up; human legs,メン,まぬか.れる; まぬが.れる
逸,1973,2127,elude,elude,deviate; village stocks; rabbit; bound up; human legs; road,イツ,そ.れる; そ.らす; はぐ.れる
晩,1974,2128,nightfall,nightfall,sun; day; village stocks; rabbit; bound up; human legs,バン,
勉,1975,2129,exertion,exertion,village stocks; rabbit; bound up; human legs; power; muscle; arnold,ベン,つと.める
象,1976,2130,elephant,elephant,colour; color; bound up; sow; pig,ショウ; ゾウ,かたど.る
像,1977,2131,statue,statue,person; elephant; colour; color; bound up; sow; pig,ゾウ,
馬,1978,2132,horse,horse,team of horses,バ,うま; うま-; ま
駒,1979,2133,pony,pony,team of horses; phrase; bound up; mouth,ク,こま
験,1980,2134,verification,verification,team of horses; awl; fit; meeting; umbrella; mouth; person,ケン; ゲン,あかし; しるし; ため.す; ためし
騎,1981,2135,equestrian,equestrian,team of horses; strange; large; St. Bernard; street; nail; spike; mouth,キ,
駐,1982,2136,parking,parking,stop-over; team of horses; candlestick; lord; drop; king; jewel; ball,チュウ,
駆,1983,2137,drive,drive,team of horses; ward; box; sheaf,ク,か.ける; か.る
駅,1984,2138,station,station,team of horses; shaku-hachi; flag; stick,エキ,
騒,1985,2139,boisterous,boisterous,team of horses; crotch; insect,ソウ,さわ.ぐ; うれい; さわ.がしい
駄,1986,2140,burdensome,burdensome,team of horses; plump; large; St. Bernard; drop,ダ; タ,
驚,1987,2141,wonder,wonder,awe; flowers; phrase; bound up; mouth; taskmaster; team of horses,キョウ,おどろ.く; おどろ.かす
篤,1988,2142,fervent,fervent,bamboo; team of horses,トク,あつ.い
罵,2699,2143,insult,insult,eye; cross-eyed; net; team of horses,バ,ののし.る
騰,1989,2144,inflation,inflation,edam; moon; month; flesh; part of the body; quarter; team of horses,トウ,
虎,1990,2145,tiger,tiger,magic wand; augury; cliff; hook; diced; seven; human legs,コ,とら
虜,1991,2146,captive,captive,tiger; male; rice field; brains; power; muscle; arnold,リョ; ロ,とりこ; とりく
膚,1992,2147,skin,skin,tiger; stomach; rice field; brains; moon; month; flesh; part of the body,フ,はだ
虚,1993,2148,void,void,tiger; row,キョ; コ,むな.しい; うつ.ろ
戯,1994,2149,frolic,frolic,void; tiger; row; fiesta,ギ; ゲ,たわむ.れる; ざ.れる; じゃ.れる
虞,1995,2150,uneasiness,uneasiness,tiger; give; mouth; chair; tool,グ,おそれ; おもんぱか.る; はか.る; うれ.える; あざむ.く; あやま.る; のぞ.む; たの.しむ
慮,1996,2151,prudence,prudence,tiger; think; rice field; brains; heart,リョ,おもんぱく.る; おもんぱか.る
劇,1997,2152,drama,drama,tiger; sow; pig; sword; sabre; saber,ゲキ,
虐,1998,2153,tyrannize,tyrannize,tiger; one; box,ギャク,しいた.げる
鹿,1999,2154,deer,deer,cave; antlers; compare; spoon; sitting on the ground,ロク,しか; か
麓,2839,2155,foot of a mountain,foot of a mountain,grove; tree; wood; deer; cave; antlers; compare; spoon; sitting on the ground,ロク,ふもと
薦,2000,2156,recommend,recommend,flowers; deer; cave; antlers; slingshot; catapult; tail feathers,セン,すす.める
慶,2001,2157,jubilation,jubilation,deer; cave; antlers; crown; heart; walking legs,ケイ,よろこ.び
麗,2002,2158,lovely,lovely,one; ceiling; mediocre; deer; cave; antlers; compare,レイ,うるわ.しい; うら.らか
熊,2003,2159,bear,bear,ability; elbow; moon; month; flesh; part of the body; spoon; sitting on the ground; oven-fire; barbecue,ユウ,くま
能,2004,2160,ability,ability,elbow; moon; month; flesh; part of the body; spoon; sitting on the ground,ノウ,よ.く
態,2005,2161,attitude,attitude,ability; elbow; moon; month; flesh; part of the body; spoon; sitting on the ground; heart,タイ,わざ.と
寅,2006,2162,sign of the tiger,sign of the tiger,house; caterpillar; one; ceiling; sprout; shoot; animal legs; eight,イン,とら
演,2007,2163,performance,performance,water; water droplets; water pistol; sign of the tiger; house; caterpillar; one; ceiling; sprout; shoot; animal legs; eight,エン,
辰,2008,2164,sign of the dragon,sign of the dragon,cliff; two; hairpin; safety-pin,シン; ジン,たつ
辱,2009,2165,embarrass,embarrass,sign of the dragon; cliff; two; hairpin; safety-pin; glue,ジョク,はずかし.める
震,2010,2166,quake,quake,rain; weather; sign of the dragon; cliff; two; hairpin; safety-pin,シン,ふる.う; ふる.える
振,2011,2167,shake,shake,finger; fingers; sign of the dragon; cliff; two; hairpin; safety-pin,シン,ふ.る; ぶ.る; ふ.り; -ぶ.り; ふ.るう
娠,2012,2168,with child,with child,woman; sign of the dragon; cliff; two; hairpin; safety-pin,シン,
唇,2013,2169,lips,lips,sign of the dragon; cliff; two; hairpin; safety-pin; mouth,シン,くちびる
農,2014,2170,agriculture,agriculture,bend; sign of the dragon; cliff; two; hairpin; safety-pin,ノウ,
濃,2015,2171,concentrated,concentrated,water; water droplets; water pistol; agriculture; bend; sign of the dragon; cliff; two; hairpin; safety-pin,ノウ,こ.い
送,2016,2172,send off,send off,escort; golden calf; horns; heavens; road,ソウ,おく.る
関,2017,2173,connection,connection,gates; golden calf; horns; heavens,カン,せき; -ぜき; かか.わる; からくり; かんぬき
咲,2018,2174,blossom,blossom,mouth; golden calf; horns; heavens,ショウ,さ.く; -ざき
鬼,2019,2175,ghost,ghost,oni; drop; brains; rice field; human legs; elbow,キ,おに; おに-
醜,2020,2176,ugly,ugly,whiskey bottle; ghost; oni; drop; brains; rice field; human legs; elbow,シュウ,みにく.い; しこ
魂,2021,2177,soul,soul,rising cloud; two; elbow; wall; ghost; oni; drop; brains; rice field; human legs; elbow,コン,たましい; たま
魔,2022,2178,witch,witch,hemp; cliff; grove; tree; wood; ghost; oni; drop; brains; rice field; human legs; elbow,マ,
魅,2023,2179,fascination,fascination,ghost; oni; drop; brains; rice field; human legs; elbow; not yet; one; tree; wood,ミ,
塊,2024,2180,clod,clod,soil; dirt; ground; ghost; oni; drop; brains; rice field; human legs; elbow,カイ; ケ,かたまり; つちくれ
襲,2025,2181,attack,attack,old dragon; vase; stand up; moon; month; flesh; part of the body; slingshot; catapult; snake; self; three; cloth; clothes; clothing; garment; dragon*,シュウ,おそ.う; かさ.ね
嚇,2026,2182,upbraid,upbraid,menacing; mouth; incandescent; red,カク,おど.かす
朕,2027,2183,majestic plural,majestic plural,moon; month; flesh; part of the body; golden calf; horns; heavens,チン,
雰,2028,2184,atmosphere,atmosphere,rain; weather; part,フン,
箇,2029,2185,item,item,bamboo; harden; pent in; old; tombstone; gravestone; church; ten; needle; mouth,カ; コ,
錬,2030,2186,tempering,tempering,metal; gold; east; tree; wood; sun; day,レン,ね.る
遵,2031,2187,abide by,abide by,revered; Mother Teresa; chieftain; Molotov cocktail; animal horns; whiskey bottle; glue; road,ジュン,
罷,2032,2188,quit,quit,eye; cross-eyed; net; ability; elbow; moon; month; flesh; part of the body; spoon; sitting on the ground,ヒ,まか.り-; や.める
屯,2033,2189,barracks,barracks,earthworm; drop; shovel; fishhook,トン,
且,2034,2190,moreover,moreover,shelf; my bookshelves,ショ; ソ; ショウ,か.つ
藻,2035,2191,seaweed,seaweed,flowers; water; water droplets; water pistol; furniture; goods; mouth; tree; wood,ソウ,も
隷,2036,2192,slave,slave,samurai; altar; show; two; small; sieve; rake; grains of rice,レイ,したが.う; しもべ
癒,2037,2193,healing,healing,sickness; hospital; in the nick of time; meeting of butchers; moon; month; flesh; part of the body; sword; sabre; saber; heart,ユ,い.える; いや.す
璽,2075,2194,imperial seal,imperial seal,let it be; noren; one; ceiling; eight; towel; stitching; patchwork quilt; jewel; earring,ジ,
潟,2039,2195,lagoon,lagoon,water; water droplets; water pistol; mortar; tail feathers,セキ,かた; -がた
丹,2038,2196,cinnabar,cinnabar,rust colored; ship´s funnel,タン,に
丑,2040,2197,sign of the cow,sign of the cow,dagger; two,チュウ,うし
羞,3029,2198,humiliate,humiliate,,シュウ,すすめ.る; はじ.る; は.ずかしい
卯,2041,2199,sign of the hare,sign of the hare,blown eggs,ボウ; モウ,う
巳,2042,2200,sign of the snake,sign of the snake,mosaic with bit missing,シ,み
此,2043,2201,this here,this here,,,
柴,2044,2202,brushwood,brushwood,,,
些,2046,2203,whit,whit,,,
砦,2045,2204,fort,fort,,,
髭,2047,2205,beard,beard,,,
禽,2049,2206,fowl,fowl,,,
檎,2050,2207,apple,apple,,,
憐,2051,2208,sympathize with,sympathize with,,,
燐,2052,2209,phosphorus,phosphorus,,,
麟,2053,2210,camelopard,camelopard,,,
鱗,2054,2211,scaled,scaled,,,
奄,2055,2212,encompassing,encompassing,,,
庵,2056,2213,hermitage,hermitage,,,
掩,2057,2214,shrouded,shrouded,,,
悛,2059,2215,make amends,make amends,,,
駿,2060,2216,steed,steed,,,
峻,2061,2217,steep,steep,,,
竣,2062,2218,complete a job,complete a job,,,
犀,2069,2219,rhinoceros,rhinoceros,,,
皐,2070,2220,lunar month,lunar month,,,
畷,2072,2221,rice-field footpath,rice-field footpath,,,
綴,2073,2222,mend,mend,,,
鎧,2076,2223,suit of armor,suit of armor,,,
凱,2077,2224,triumph,triumph,,,
呑,2080,2225,quaff,quaff,,,
韮,2081,2226,leek,leek,,,
籤,2082,2227,lottery,lottery,,,
懺,2083,2228,penitential,penitential,,,
芻,2084,2229,hay,hay,,,
雛,2085,2230,chick,chick,,,
趨,2086,2231,scurry,scurry,,,
尤,2087,2232,understandably,understandably,,,
厖,2089,2233,immense,immense,,,
或,2091,2234,a  (a certain),a  (a certain),,,
兎,2093,2235,rabbit,rabbit,,,
也,2094,2236,est,est,,,
巴,2096,2237,comma-design,comma-design,,,
疋,2098,2238,critters,critters,,,
菫,2099,2239,violet,violet,,,
曼,2100,2240,mandala,mandala,,,
云,2102,2241,quote,quote,,,
莫,2105,2242,shalt,shalt,,,
而,3006,2243,and then,and then,,,
倭,2106,2244,Yamato,Yamato,,,
侠,2107,2245,chivalry,chivalry,,,
倦,2108,2246,fed up,fed up,,,
俄,2110,2247,abrupt,abrupt,,,
佃,2111,2248,work a field,work a field,,,
仔,2113,2249,animal offspring,animal offspring,,,
仇,2114,2250,foe,foe,,,
伽,2115,2251,look after,look after,,,
儲,2118,2252,make a profit,make a profit,,,
僑,2120,2253,emigrant,emigrant,,,
倶,2124,2254,mate,mate,,,
侃,2123,2255,integrity,forthright,,,
偲,2129,2256,memorial,memorial,,,
侭,2125,2257,as is,as is,,,
脩,2130,2258,dried meat,dried meat,,,
倅,2131,2259,my son,my son,,,
做,2132,2260,make do,make do,,,
冴,2134,2261,sharp,sharp,,,
凋,2135,2262,wilt,wilt,,,
凌,2136,2263,pull through,pull through,,,
凛,2138,2264,stately,stately,,,
凧,2139,2265,kite,kite,,,
凪,2140,2266,lull,lull,,,
夙,2141,2267,earlybird,earlybird,,,
鳳,2142,2268,phoenix,phoenix,,,
剽,,2269,,menace,,,
劉,2143,2270,slaughter,slaughter,,,
剃,2146,2271,shave,shave,,,
厭,2149,2272,despondent,despondent,,,
雁,2150,2273,wild goose,wild goose,,,
贋,2151,2274,counterfeit,counterfeit,,,
厨,2152,2275,kitchen,kitchen,,,
仄,2153,2276,insinuate,insinuate,,,
哨,2154,2277,scout,scout,,,
咎,2156,2278,reprehend,reprehend,,,
囁,2157,2279,whisper,whisper,,,
喋,2158,2280,chatter,chatter,,,
嘩,2160,2281,quarrel,quarrel,,,
噂,2161,2282,gossip,gossip,,,
咳,2162,2283,cough,cough,,,
喧,2163,2284,clamor,clamor,,,
叩,2166,2285,bash,bash,,,
嘘,2167,2286,fib,fib,,,
啄,2168,2287,peck at,peck at,,,
吠,2170,2288,barking,barking,,,
吊,2171,2289,dangle,dangle,,,
噛,2172,2290,chew,chew,,,
叶,2173,2291,within my ability,within my ability,,,
吻,2174,2292,sides of the mouth,sides of the mouth,,,
吃,2175,2293,stammer,stammer,,,
噺,2176,2294,spin a tale,spin a tale,,,
噌,2177,2295,miso,miso,,,
邑,2180,2296,city walls,city walls,,,
呆,2181,2297,dumbfounded,dumbfounded,,,
喰,2182,2298,ingest,ingest,,,
埴,2183,2299,clay,clay,,,
坤,2184,2300,authochthonous,authochthonous,,,
壕,2186,2301,dugout,dugout,,,
垢,2187,2302,blemish,blemish,,,
坦,2188,2303,flat,flat,,,
埠,2189,2304,wharf,wharf,,,
堰,2191,2305,dam,dam,,,
堵,2192,2306,railing,railing,,,
嬰,2193,2307,suckling infant,suckling infant,,,
姦,2194,2308,violate,violate,,,
婢,2196,2309,handmaiden,handmaiden,,,
婉,2197,2310,well finished,well finished,,,
娼,2198,2311,harlot,harlot,,,
妓,2199,2312,courtesan,courtesan,,,
娃,2200,2313,fair,fair,,,
姪,2201,2314,niece,niece,,,
嬬,2203,2315,mistress,mistress,,,
姥,2204,2316,aged woman,aged woman,,,
姑,2205,2317,mother-in-law,mother-in-law,,,
姐,2206,2318,young miss,young miss,,,
嬉,2207,2319,overjoyed,overjoyed,,,
孕,2208,2320,expecting,expecting,,,
孜,2209,2321,assiduous,assiduous,,,
宥,2210,2322,soothe,soothe,,,
寓,2211,2323,imply,imply,,,
宏,2212,2324,extensive,extensive,,,
牢,2213,2325,jail,jail,,,
宋,2215,2326,Sung dynasty,Sung dynasty,,,
宍,2216,2327,venison,venison,,,
屠,2217,2328,butchering,butchering,,,
屁,2218,2329,fart,fart,,,
屑,2219,2330,rubbish,rubbish,,,
屡,2221,2331,frequently,frequently,,,
屍,2222,2332,corpse,corpse,,,
屏,2223,2333,folding screen,folding screen,,,
嵩,2224,2334,high-reaching,high-reaching,,,
崚,2225,2335,rugged mountains,rugged mountains,,,
嶺,2228,2336,mountaintop,mountaintop,,,
嵌,2229,2337,fit into,fit into,,,
帖,2231,2338,quire,quire,,,
幡,2232,2339,banner,banner,,,
幟,2233,2340,pennant,pennant,,,
庖,2234,2341,cleaver,cleaver,,,
廓,2235,2342,licensed quarters,licensed quarters,,,
庇,2236,2343,overhang,overhang,,,
鷹,2237,2344,hawk,hawk,,,
庄,2238,2345,shire,shire,,,
廟,2239,2346,tomb sanctuary,tomb sanctuary,,,
彊,2240,2347,strengthen,strengthen,,,
弛,2242,2348,loosen,loosen,,,
粥,2243,2349,rice gruel,rice gruel,,,
挽,2244,2350,lathe,lathe,,,
撞,2245,2351,bump into,bump into,,,
扮,2246,2352,disguise,disguise,,,
捏,,2353,,fabrication,,,
掴,2249,2354,clutch,clutch,,,
捺,2250,2355,impress,impress,,,
掻,2252,2356,scratch,scratch,,,
撰,2253,2357,assortment,assortment,,,
揃,2255,2358,muster,muster,,,
捌,2256,2359,deal with,deal with,,,
按,2259,2360,press down on,press down on,,,
播,2262,2361,disseminate,disseminate,,,
揖,2263,2362,interpretation,collect,,,
托,2264,2363,receptable,receptacle,,,
捧,2265,2364,dedicate,devote,,,
撚,2266,2365,twirl,twirl,,,
挺,2267,2366,counter for tools,counter for tools,,,
擾,2268,2367,commotion,commotion,,,
撫,2270,2368,petting,petting,,,
撒,2271,2369,sprinkle,sprinkle,,,
擢,2272,2370,outstanding,outstanding,,,
摺,2258,2371,rubbing,rubbing,,,
捷,2273,2372,spoils,spoils,,,
抉,2274,2373,gouge out,gouge out,,,
怯,2275,2374,wince,wince,,,
惟,2276,2375,ponder,ponder,,,
惚,2277,2376,infatuation,infatuation,,,
怜,2278,2377,quickwitted,quickwitted,,,
惇,2279,2378,considerate,considerate,,,
恰,2281,2379,as if,as if,,,
恢,2282,2380,enlarge,enlarge,,,
悌,2283,2381,respect for elders,respect for elders,,,
澪,2285,2382,canal,canal,,,
洸,2286,2383,glistening,glistening,,,
滉,2287,2384,bounding main,bounding main,,,
漱,2288,2385,gargle,gargle,,,
洲,2289,2386,continent,continent,,,
洵,2290,2387,swirling waters,swirling waters,,,
滲,2291,2388,seep,seep,,,
洒,2292,2389,rinse,rinse,,,
沐,2293,2390,douse,douse,,,
泪,2294,2391,teardrops,teardrops,,,
渾,2295,2392,gushing,gushing,,,
涜,2297,2393,blaspheme,blaspheme,,,
梁,2299,2394,roofbeam,roofbeam,,,
澱,2300,2395,sediment,sediment,,,
洛,2302,2396,old Kyoto,old Kyoto,,,
汝,2303,2397,thou,thou,,,
漉,2304,2398,filter,filter,,,
瀕,2305,2399,on the verge of,on the verge of,,,
濠,2306,2400,moat,moat,,,
溌,2307,2401,spray,spray,,,
湊,2309,2402,port,port,,,
淋,2310,2403,solitude,solitude,,,
浩,2311,2404,abounding,abounding,,,
汀,2312,2405,water’s edge,water’s edge,,,
鴻,2313,2406,large goose,large goose,,,
潅,2314,2407,souse,souse,,,
溢,2315,2408,brimming,brimming,,,
湛,2317,2409,inundate,inundate,,,
淳,2318,2410,immaculate,immaculate,,,
渥,2320,2411,moisten,moisten,,,
灘,2321,2412,rough seas,rough seas,,,
汲,2322,2413,draw water,draw water,,,
瀞,2323,2414,river pool,river pool,,,
溜,2324,2415,cumulation,cumulation,,,
渕,2325,2416,abyss,abyss,,,
沌,2326,2417,chaos,chaos,,,
濾,2328,2418,strainer,strainer,,,
濡,2329,2419,drench,drench,,,
淀,2330,2420,eddy,eddy,,,
涅,2331,2421,fabrication,black soil,,,
斧,2333,2422,hatchet,hatchet,,,
爺,2334,2423,grandpa,grandpa,,,
猾,2335,2424,sly,sly,,,
猥,2336,2425,indecent,indecent,,,
狡,2337,2426,cunning,cunning,,,
狸,2338,2427,racoon dog,racoon dog,,,
狼,2339,2428,wolf,wolf,,,
狽,2340,2429,flustered,flustered,,,
狗,2341,2430,pup,pup,,,
狐,2342,2431,fox,fox,,,
狛,2343,2432,a-un,a-un,,,
獅,2345,2433,lion,lion,,,
狒,2346,2434,baboon,baboon,,,
莨,2347,2435,tobacco,tobacco,,,
茉,2348,2436,jasmine,jasmine,,,
莉,2349,2437,hawthorn,hawthorn,,,
苺,2350,2438,strawberry,strawberry,,,
萩,2351,2439,bush clover,bush clover,,,
藝,2352,2440,technique (old),technique (old),,,
薙,2353,2441,trim,trim,,,
蓑,2354,2442,straw raincoat,straw raincoat,,,
苔,2356,2443,moss,moss,,,
蕩,2357,2444,prodigal,prodigal,,,
蔓,2359,2445,tendril,tendril,,,
蓮,2360,2446,lotus,lotus,,,
芙,2361,2447,lotus flower,lotus flower,,,
蓉,2362,2448,lotus blossom,lotus blossom,,,
蘭,2363,2449,orchid,orchid,,,
芦,2364,2450,hollow reed,hollow reed,,,
薯,2365,2451,yam,yam,,,
菖,2366,2452,iris,iris,,,
蕉,2367,2453,banana,banana,,,
蕎,2369,2454,buckwheat,buckwheat,,,
蕗,2370,2455,butterbur,butterbur,,,
茄,2372,2456,eggplant,eggplant,,,
蔭,2374,2457,behind the scenes,behind the scenes,,,
蓬,2375,2458,wormwood,wormwood,,,
芥,2376,2459,mustard,mustard,,,
萌,2377,2460,germinate,germinate,,,
葡,2378,2461,grape,grape,,,
萄,2379,2462,grape vine,grape vine,,,
蘇,2380,2463,resurrect,resurrect,,,
蕃,2381,2464,grow wild,grow wild,,,
苓,2382,2465,cocklebur,cocklebur,,,
菰,2383,2466,rush mat,rush mat,,,
蒙,2384,2467,darken,darken,,,
茅,2385,2468,grassy reed,grassy reed,,,
芭,2386,2469,plantain,plantain,,,
苅,2387,2470,mow,mow,,,
葱,2389,2471,onion,onion,,,
葵,2391,2472,hollyhock,hollyhock,,,
葺,2392,2473,shingling,shingling,,,
蕊,2393,2474,stamen,stamen,,,
茸,2394,2475,mushroom,mushroom,,,
蒔,2395,2476,sowing,sowing,,,
芹,2396,2477,parsley,parsley,,,
苫,2397,2478,thatching,thatching,,,
蒼,2399,2479,pale blue,pale blue,,,
藁,2400,2480,straw,straw,,,
蕪,2401,2481,turnip,turnip,,,
藷,2402,2482,sweet potato,sweet potato,,,
薮,2403,2483,quack,quack,,,
蒜,2404,2484,garlic,garlic,,,
蕨,2405,2485,bracken,bracken,,,
蔚,2406,2486,grow plentiful,grow plentiful,,,
茜,2407,2487,madder red,madder red,,,
莞,2408,2488,candle rush,candle rush,,,
蒐,2409,2489,collector,collector,,,
菅,2410,2490,sedge,sedge,,,
葦,2411,2491,ditch reed,ditch reed,,,
迪,2412,2492,Way,Way,,,
辿,2413,2493,track down,track down,,,
這,2414,2494,crawl,crawl,,,
迂,2415,2495,detour,detour,,,
遁,2416,2496,elude,shirk,,,
逢,2417,2497,tryst,tryst,,,
遥,2418,2498,far off,far off,,,
遼,2419,2499,remote,faraway,,,
逼,2420,2500,pressing,pressing,,,
迄,2421,2501,until,until,,,
逗,2423,2502,standstill,standstill,,,
鄭,2425,2503,courtesy,courtesy,,,
隕,,2504,,falling,,,
隈,2427,2505,nook,nook,,,
憑,2428,2506,possessed,possessed,,,
惹,2429,2507,attract,attract,,,
悉,2430,2508,without exception,without exception,,,
忽,2431,2509,instantaneously,instantaneously,,,
惣,2432,2510,firstborn son,firstborn son,,,
愈,2433,2511,in the nick of time,in the nick of time,,,
恕,2434,2512,sensitive,sensitive,,,
昴,2435,2513,overarching,overarching,,,
晋,2436,2514,progress,progress,,,
晟,2438,2515,aglow,aglow,,,
暈,2439,2516,halo,halo,,,
暉,2440,2517,glitter,glitter,,,
旱,2441,2518,dry weather,dry weather,,,
晏,2442,2519,clear skies,clear skies,,,
晨,2443,2520,morrow,morrow,,,
晒,2444,2521,bleaching,bleaching,,,
晃,2446,2522,limpid,limpid,,,
曝,2447,2523,air out,air out,,,
曙,2448,2524,dawn,dawn,,,
昂,2449,2525,elevate,elevate,,,
昏,2451,2526,dusk,dusk,,,
晦,2452,2527,last day of the month,last day of the month,,,
膿,2455,2528,pus,pus,,,
腑,2456,2529,viscera,viscera,,,
胱,2457,2530,bladder,bladder,,,
胚,2458,2531,embryo,embryo,,,
肛,2459,2532,anus,anus,,,
脆,2462,2533,fragile,fragile,,,
肋,2463,2534,rib,rib,,,
腔,2465,2535,body cavity,body cavity,,,
肱,2469,2536,armrest,armrest,,,
胡,2470,2537,uncivilized,uncivilized,,,
楓,2471,2538,maple tree,maple tree,,,
楊,2473,2539,purple willow,purple willow,,,
椋,2474,2540,Oriental elm,Oriental elm,,,
榛,2475,2541,hazel,hazel,,,
櫛,2476,2542,comb,comb,,,
槌,2477,2543,wooden hammer,wooden hammer,,,
樵,2478,2544,mallet,mallet,,,
梯,2479,2545,ladder,ladder,,,
柑,2482,2546,citrus tree,citrus tree,,,
杭,2484,2547,picket,picket,,,
柊,2485,2548,holly,holly,,,
柚,2486,2549,citron,citron,,,
椀,2487,2550,wooden bowl,wooden bowl,,,
栂,2488,2551,hemlock,hemlock,,,
柾,2489,2552,spindle tree,spindle tree,,,
榊,2490,2553,sacred Shinto tree,sacred tree,,,
樫,2491,2554,evergreen oak,evergreen oak,,,
槙,2492,2555,Chinese black pine,black pine,,,
楢,2493,2556,Japanese oak,Japanese oak,,,
橘,2494,2557,mandarin orange,mandarin orange,,,
桧,2495,2558,Japanese cypress,Japanese cypress,,,
棲,2496,2559,roost,roost,,,
栖,2497,2560,nestle,nestle,,,
桔,2499,2561,bellflower,bellflower,,,
杜,2500,2562,temple grove,temple grove,,,
杷,2501,2563,grain rake,grain rake,,,
梶,2502,2564,oar,oar,,,
杵,2503,2565,wooden pestle,wooden pestle,,,
杖,2504,2566,cane,cane,,,
樽,2506,2567,barrel,barrel,,,
櫓,2508,2568,turret,turret,,,
橿,2509,2569,sturdy oak,sturdy oak,,,
杓,2510,2570,wooden ladle,wooden ladle,,,
李,2511,2571,damson,damson,,,
棉,2512,2572,raw cotton,raw cotton,,,
楯,2513,2573,escutcheon,escutcheon,,,
榎,2514,2574,hackberry,hackberry,,,
樺,2515,2575,birch,birch,,,
槍,2516,2576,lance,lance,,,
柘,2517,2577,wild mulberry,wild mulberry,,,
梱,2518,2578,bale,bale,,,
枇,2519,2579,loquat,loquat,,,
樋,2520,2580,downspout,downspout,,,
橇,2521,2581,sled,sled,,,
槃,2522,2582,enjoyment,enjoyment,,,
栞,2523,2583,bookmark,bookmark,,,
椰,2524,2584,coconut tree,coconut tree,,,
檀,2525,2585,sandalwood,sandalwood,,,
樗,2526,2586,plotosid,sumac,,,
槻,2527,2587,zelkova,zelkova,,,
椙,2528,2588,cryptomeria,cryptomeria,,,
彬,2529,2589,copious,copious,,,
桶,2530,2590,bucket,bucket,,,
楕,2531,2591,ellipse,ellipse,,,
樒,2532,2592,star-anise,star-anise,,,
毬,2533,2593,furball,furball,,,
燿,2534,2594,twinkle,twinkle,,,
燎,2535,2595,watchfire,watchfire,,,
炬,2536,2596,torch,torch,,,
焚,2537,2597,kindle,kindle,,,
灸,2538,2598,moxa,moxa,,,
煽,2540,2599,fanning,fanning,,,
煤,2541,2600,soot,soot,,,
煉,2542,2601,firing,firing,,,
燦,2543,2602,dazzling,dazzling,,,
灼,2544,2603,refulgent,refulgent,,,
烙,2545,2604,branding,branding,,,
焔,2546,2605,flames,flames,,,
烹,2549,2606,stew,stew,,,
牽,2550,2607,tug,tug,,,
牝,2551,2608,female animal,female animal,,,
牡,2552,2609,male animal,male animal,,,
琳,2554,2610,chime,chime,,,
琉,2557,2611,lapis lazuli,lapis lazuli,,,
瑳,2559,2612,burnish,burnish,,,
琢,2560,2613,hone,hone,,,
珊,2561,2614,coral,coral,,,
瑚,2562,2615,coral reef,coral reef,,,
瑞,2563,2616,fortunate,fortunate,,,
玖,2565,2617,jet,jet,,,
瑛,2566,2618,crystal stone,crystal stone,,,
玲,2568,2619,tinkling,tinkling,,,
畢,2570,2620,lastly,lastly,,,
畦,2571,2621,paddy-field ridge,paddy-field ridge,,,
痒,2572,2622,itch,itch,,,
痰,2573,2623,phlegm,phlegm,,,
疹,2574,2624,measles,measles,,,
痔,2575,2625,hemorrhoids,hemorrhoids,,,
癌,2576,2626,cancer,cancer,,,
痺,2579,2627,paralysis,paralysis,,,
眸,2580,2628,apple of the eye,apple of the eye,,,
眩,2581,2629,dizzy,dizzy,,,
雉,2584,2630,pheasant,pheasant,,,
矩,2585,2631,carpenter’s square,carpenter’s square,,,
磐,2586,2632,crag,crag,,,
碇,2587,2633,grapnel,grapnel,,,
碧,2588,2634,blue-green,blue-green,,,
硯,2589,2635,inkstone,inkstone,,,
砥,2590,2636,grindstone,grindstone,,,
碗,2591,2637,teacup,teacup,,,
碍,2592,2638,obstacle,obstacle,,,
碩,2593,2639,illustrious,illustrious,,,
磯,2594,2640,rocky beach,rocky beach,,,
砺,2595,2641,whetstone,whetstone,,,
碓,2596,2642,mill,mill,,,
禦,2597,2643,fend off,fend off,,,
祷,2598,2644,beseech,beseech,,,
祐,2599,2645,ancestral tablet,ancestral tablet,,,
祇,2600,2646,local god,local god,,,
祢,2601,2647,ancestral shrine,ancestral shrine,,,
禄,2602,2648,salarium,salarium,,,
禎,2603,2649,felicitation,felicitation,,,
秤,2604,2650,balancing scales,balancing scales,,,
黍,2605,2651,millet,millet,,,
禿,2606,2652,bald,bald,,,
稔,2607,2653,bear fruit,bear fruit,,,
稗,2608,2654,crabgrass,crabgrass,,,
穣,2609,2655,bumper crop,bumper crop,,,
稜,2610,2656,imperial authority,imperial authority,,,
稀,2611,2657,sparse,sparse,,,
穆,2612,2658,obeisant,obeisant,,,
窺,2613,2659,peep,peep,,,
窄,2614,2660,tight,tight,,,
穿,2616,2661,drill,drill,,,
竃,2617,2662,kitchen stove,kitchen stove,,,
竪,2618,2663,longness,longness,,,
颯,2619,2664,rustling,rustling,,,
站,2620,2665,outpost,outpost,,,
靖,2621,2666,repose,repose,,,
妾,2622,2667,concubine,concubine,,,
衿,2623,2668,lapel,lapel,,,
袷,2625,2669,lined kimono,lined kimono,,,
袴,2626,2670,pleated skirt,pleated skirt,,,
襖,2627,2671,sliding door,sliding door,,,
笙,2628,2672,Chinese panpipe,Chinese panpipe,,,
筏,2629,2673,raft,raft,,,
簾,2630,2674,bamboo blinds,bamboo blinds,,,
箪,2631,2675,rattan box,rattan box,,,
竿,2632,2676,pole,pole,,,
箆,2633,2677,spatula,spatula,,,
箔,2634,2678,foil,foil,,,
笥,2635,2679,wardrobe,wardrobe,,,
箭,2636,2680,arrow shaft,arrow shaft,,,
筑,2637,2681,ancient harp,ancient harp,,,
篠,2639,2682,slender bamboo,slender bamboo,,,
纂,2641,2683,redaction,redaction,,,
竺,2642,2684,bamboo cane,bamboo cane,,,
箕,2643,2685,winnowing fan,winnowing fan,,,
笈,2644,2686,backpack,backpack,,,
篇,2645,2687,livraison,livraison,,,
筈,2646,2688,should,should,,,
簸,2647,2689,winnow,winnow,,,
粕,2648,2690,settlings,settlings,,,
糟,2649,2691,lees,lees,,,
糊,2650,2692,paste,paste,,,
籾,2651,2693,unhulled rice,unhulled rice,,,
糠,2652,2694,rice bran,rice bran,,,
糞,2653,2695,excrement,excrement,,,
粟,2654,2696,foxtail millet,foxtail millet,,,
繋,2655,2697,link up,link up,,,
綸,2656,2698,twine,twine,,,
絨,2657,2699,carpet yarn,carpet yarn,,,
絆,2658,2700,ties,ties,,,
緋,2659,2701,scarlet,scarlet,,,
綜,2660,2702,synthesis,synthesis,,,
紐,2661,2703,string,string,,,
紘,2662,2704,chinstrap,chinstrap,,,
纏,2663,2705,summarize,summarize,,,
絢,2664,2706,gorgeous,gorgeous,,,
繍,2665,2707,embroidery,embroidery,,,
紬,2666,2708,pongee,pongee,,,
綺,2667,2709,ornate,ornate,,,
綾,2668,2710,damask,damask,,,
絃,2669,2711,catgut,catgut,,,
縞,2671,2712,stripe,stripe,,,
綬,2672,2713,gimp,gimp,,,
紗,2673,2714,gossamer,gossamer,,,
舵,2674,2715,rudder,rudder,,,
聯,2676,2716,strung together,strung together,,,
聡,2677,2717,attentive,attentive,,,
聘,2678,2718,summons,summons,,,
耽,2679,2719,addiction,addiction,,,
耶,2680,2720,exclamation,exclamation,,,
蚤,2681,2721,flea,flea,,,
蟹,2682,2722,crab,crab,,,
蛋,2683,2723,protein,protein,,,
蟄,2684,2724,hibernation,hibernation,,,
蝿,2685,2725,housefly,housefly,,,
蟻,2686,2726,ant,ant,,,
蝋,2688,2727,wax,wax,,,
蝦,2689,2728,shrimp,shrimp,,,
蛸,2690,2729,octopus,octopus,,,
螺,2691,2730,screw,screw,,,
蝉,2692,2731,cicada,cicada,,,
蛙,2693,2732,frog,frog,,,
蛾,2694,2733,moth,moth,,,
蛤,2695,2734,clam,clam,,,
蛭,2696,2735,leech,leech,,,
蛎,2697,2736,oyster,oyster,,,
罫,2698,2737,ruled lines,ruled lines,,,
袈,2700,2738,stole,stole,,,
裟,2701,2739,monk’s sash,monk’s sash,,,
截,2703,2740,incision,incision,,,
哉,2704,2741,I wonder,I wonder,,,
詢,2705,2742,counsel,counsel,,,
諄,2706,2743,polite,polite,,,
讐,2707,2744,vendetta,vendetta,,,
諌,2708,2745,remonstrate,remonstrate,,,
諒,2710,2746,verify,verify,,,
讃,2711,2747,compliment,compliment,,,
訊,2713,2748,query,query,,,
訣,2714,2749,split up,split up,,,
詫,2721,2750,beg pardon,beg another’s pardon,,,
誼,2719,2751,familiarity,familiarity,,,
謬,2720,2752,fallible,fallible,,,
訝,,2753,,wary,,,
諺,2723,2754,proverb,proverb,,,
誹,2724,2755,slander,slander,,,
謂,2725,2756,so-called,so-called,,,
諜,2726,2757,secret agent,secret agent,,,
註,2727,2758,footnote,footnote,,,
譬,2728,2759,parable,parable,,,
轟,2729,2760,rumble,rumble,,,
輔,2730,2761,reinforce,reinforce,,,
輻,2731,2762,spoke,spoke,,,
輯,2732,2763,assemble,assemble,,,
豹,2734,2764,panther,panther,,,
賎,2735,2765,despicable,despicable,,,
貰,2737,2766,get,get,,,
賑,2739,2767,bustling,bustling,,,
贖,,2768,,expiate,,,
躓,2740,2769,stumble,stumble,,,
蹄,2741,2770,hoof,hoof,,,
蹟,2743,2771,vestiges,vestiges,,,
跨,2744,2772,straddle,straddle,,,
跪,2745,2773,kneel,kneel,,,
醤,2746,2774,soy sauce,soy sauce,,,
醍,2747,2775,whey,whey,,,
醐,2749,2776,ghee,ghee,,,
醇,2751,2777,strong sake,strong sake,,,
麹,2753,2778,malt,malt,,,
釦,2754,2779,button,button,,,
銚,2755,2780,keg,keg,,,
鋤,2756,2781,plow,plow,,,
鋸,2759,2782,hand saw,hand saw,,,
錐,2760,2783,awl,awl,,,
鍬,2762,2784,hoe,hoe,,,
鋲,2763,2785,rivet,rivet,,,
錫,2764,2786,tin,tin,,,
錨,2765,2787,anchor,anchor,,,
釘,2766,2788,nail,nail,,,
鑓,2767,2789,javelin,javelin,,,
鋒,2768,2790,sword’s point,sword’s point,,,
鎚,2769,2791,hammer,hammer,,,
鉦,2770,2792,carillion,carillion,,,
錆,2771,2793,rust,rust,,,
鍾,2772,2794,cluster,cluster,,,
鋏,2773,2795,scissors,scissors,,,
閃,2774,2796,flash,flash,,,
悶,2775,2797,agony,agony,,,
閤,2776,2798,side gate,side gate,,,
雫,2778,2799,trickle,trickle,,,
霞,2779,2800,haze,haze,,,
翰,2780,2801,quill,quill,,,
斡,2781,2802,auspices,auspices,,,
鞍,2782,2803,saddle,saddle,,,
鞭,2783,2804,whip,whip,,,
鞘,2784,2805,saddle straps,saddle straps,,,
鞄,2785,2806,briefcase,briefcase,,,
靭,2786,2807,pliable,pliable,,,
鞠,2787,2808,terminate,terminate,,,
顛,2789,2809,overturn,overturn,,,
穎,2790,2810,brush tip,brush tip,,,
頗,2793,2811,exceedingly,exceedingly,,,
頌,2794,2812,accolade,accolade,,,
頚,2796,2813,neck and throat,neck and throat,,,
餐,2798,2814,repast,repast,,,
饗,2799,2815,feast,feast,,,
蝕,2800,2816,eclipse,eclipse,,,
飴,2801,2817,sweets,sweets,,,
駕,2803,2818,stretcher,stretcher,,,
騨,2804,2819,piebald,piebald,,,
馳,2805,2820,rush,rush,,,
騙,2806,2821,cheat,cheat,,,
馴,2807,2822,tame,tame,,,
駁,2808,2823,rebuttal,rebuttal,,,
駈,2809,2824,gallop,gallop,,,
驢,2810,2825,donkey,donkey,,,
鰻,2811,2826,eel,eel,,,
鯛,2812,2827,sea bream,sea bream,,,
鰯,2813,2828,sardine,sardine,,,
鱒,2814,2829,trout,trout,,,
鮭,2815,2830,salmon,salmon,,,
鮪,2816,2831,tuna,tuna,,,
鮎,2817,2832,sweet smelt,sweet smelt,,,
鯵,2818,2833,horse mackerel,horse mackerel,,,
鱈,2819,2834,cod,cod,,,
鯖,2820,2835,mackerel,mackerel,,,
鮫,2821,2836,shark,shark,,,
鰹,2822,2837,bonito,bonito,,,
鰍,2823,2838,bullhead,bullhead,,,
鰐,2824,2839,alligator,alligator,,,
鮒,2825,2840,crucian,crucian carp,,,
鮨,2826,2841,sushi,sushi,,,
鰭,2827,2842,fish fin,fish fin,,,
鴎,2828,2843,seagull,seagull,,,
鵬,2829,2844,roc,roc,,,
鸚,2830,2845,parakeet,parakeet,,,
鵡,2831,2846,parrot,parrot,,,
鵜,2832,2847,cormorant,cormorant,,,
鷺,2833,2848,heron,heron,,,
鷲,2834,2849,eagle,eagle,,,
鴨,2835,2850,wild duck,wild duck,,,
鳶,2836,2851,kite falcon,black kite,,,
梟,2837,2852,owl,owl,,,
塵,2838,2853,dust,dust,,,
麒,2840,2854,giraffe,giraffe,,,
舅,2064,2855,father-in-law,father-in-law,,,
鼠,2065,2856,mouse,mouse,,,
鑿,2066,2857,bore,bore,,,
艘,2068,2858,small craft,small craft,,,
瞑,2842,2859,close the eyes,close the eyes,,,
暝,2843,2860,murky,murky,,,
坐,2844,2861,sitting in meditation,sitting in meditation,,,
朔,2846,2862,first day of the month,first day of the month,,,
曳,2848,2863,drag,tow,,,
洩,2849,2864,dribble out,dribble out,,,
彗,2850,2865,comet,comet,,,
慧,2851,2866,astute,astute,,,
爾,2074,2867,let it be,let it be,,,
嘉,2852,2868,applaud,applaud,,,
兇,2853,2869,evil,evil,,,
兜,2854,2870,helmet,helmet,,,
靄,,2871,,mist,,,
劫,2857,2872,kalpa,kalpa,,,
歎,2859,2873,bemoan,bemoan,,,
輿,2860,2874,palanquin,palanquin,,,
歪,2862,2875,warped,warped,,,
翠,2863,2876,jade green,jade green,,,
黛,2864,2877,blue-black,blue-black,,,
鼎,2865,2878,tripod,tripod,,,
鹵,2866,2879,rocksalt,rocksalt,,,
鹸,2867,2880,lye,lye,,,
虔,2868,2881,reserved,reserved,,,
燕,2869,2882,swallow,swallow,,,
嘗,2870,2883,lick,lick,,,
殆,2871,2884,almost,almost,,,
牌,2873,2885,mahjong tiles,mahjong tiles,,,
覗,2875,2886,peek,peek,,,
齟,,2887,,disagree,,,
齬,,2888,,discord,,,
秦,2877,2889,Manchu dynasty,Manchu dynasty,,,
雀,2878,2890,sparrow,sparrow,,,
隼,2879,2891,peregrine falcon,peregrine falcon,,,
耀,2880,2892,shimmering,shimmering,,,
夷,2881,2893,ebisu,ebisu,,,
嚢,2883,2894,cyst,cyst,,,
暢,2885,2895,carefree,carefree,,,
廻,2886,2896,circling,circling,,,
欣,2888,2897,elation,elation,,,
毅,2889,2898,stalwart,stalwart,,,
斯,2890,2899,this,this,,,
匙,2891,2900,wooden spoon,wooden spoon,,,
匡,2892,2901,set straight,set straight,,,
肇,2893,2902,founding,founding,,,
麿,2894,2903,Utamaro,Utamaro,,,
叢,2895,2904,conglomerate,conglomerate,,,
肴,2896,2905,entreat,entreat,,,
斐,2897,2906,symmetrically patterned,symmetrically patterned,,,
卿,2898,2907,magistrate,magistrate,,,
翫,2899,2908,fiddle with,fiddle with,,,
於,2900,2909,within,within,,,
套,2901,2910,hackneyed,hackneyed,,,
叛,2902,2911,rebellion,rebellion,,,
尖,2903,2912,sharp point,sharp point,,,
壷,2904,2913,crock,crock,,,
叡,2905,2914,sapience,sapience,,,
酋,2906,2915,chieftain,chieftain,,,
鴬,2907,2916,nightingale,nightingale,,,
赫,2908,2917,incandescent,incandescent,,,
臥,2909,2918,supinate,supinate,,,
甥,2910,2919,nephew,nephew,,,
瓢,2911,2920,gourd,gourd,,,
琵,2912,2921,biwa,biwa,,,
琶,2913,2922,lute,lute,,,
叉,2914,2923,forked,forked,,,
乖,,2924,,disobey,,,
畠,2916,2925,dry field,dry field,,,
圃,2918,2926,vegetable patch,vegetable patch,,,
丞,2919,2927,helping hand,helping hand,,,
亮,2920,2928,translucent,translucent,,,
胤,2921,2929,blood relative,blood relative,,,
疏,2922,2930,transcription,transcription,,,
膏,2923,2931,ointment,ointment,,,
魁,2924,2932,pioneer,pioneer,,,
馨,2925,2933,ambrosial,ambrosial,,,
牒,2926,2934,label,label,,,
瞥,2927,2935,glimpse,glimpse,,,
睾,2929,2936,testicle,testicle,,,
巫,2930,2937,sorceress,sorceress,,,
敦,2931,2938,empathetic,empathetic,,,
奎,2932,2939,Andromeda,Andromeda,,,
翔,2933,2940,soar,soar,,,
皓,2934,2941,beaming,beaming,,,
黎,2935,2942,tenebrous,tenebrous,,,
赳,2936,2943,bold,bold,,,
已,2937,2944,stop short,stop short,,,
棘,2938,2945,thornbush,thornbush,,,
祟,2945,2946,cast a spell,haunt,,,
甦,2940,2947,resuscitate,resuscitate,,,
剪,2941,2948,pruning,pruning,,,
躾,2942,2949,upbringing,upbringing,,,
夥,2943,2950,plentiful,plentiful,,,
鼾,2944,2951,snore,snore,,,
陀,2955,2952,Shakyamuni Buddha,steeply inclined,,,
粁,2946,2953,kilometer,kilometer,,,
糎,2947,2954,centimeter,centimeter,,,
粍,2948,2955,millimeter,millimeter,,,
噸,2949,2956,ton,ton,,,
哩,2950,2957,mile,mile,,,
浬,2951,2958,nautical mile,nautical mile,,,
吋,2952,2959,inch,inch,,,
呎,2953,2960,feet,foot,,,
梵,2954,2961,brahman,brahman,,,
薩,2956,2962,bodhisattva,bodhisattva,,,
菩,2957,2963,bo tree,bo tree,,,
唖,2958,2964,babble,babble,,,
牟,2961,2965,moo,moo,,,
迦,2959,2966,Sanskrit ka,Sanskrit ka,,,
珈,2962,2967,jeweled hairpin,jeweled hairpin,,,
琲,2963,2968,beaded hairpin,beaded hairpin,,,
檜,2964,2969,Japanese cypress (old),Japanese cypress (old),,,
轡,2965,2970,bridle’s bit,tinkling bell,,,
淵,2966,2971,abyss (old),abyss (old),,,
伍,2967,2972,V,V,,,
什,2968,2973,X,X,,,
萬,2969,2974,ten thousand (old),ten thousand (old),,,
邁,2970,2975,pass through,pass through,,,
燭,2539,2976,candlelight,candlelight,,,
逞,2971,2977,tough,tough,,,
燈,2972,2978,lamp (old),lamp (old),,,
裡,2973,2979,back (old),back (old),,,
薗,2974,2980,park (alternate),park (alternate),,,
鋪,2975,2981,shop (alternate),shop (alternate),,,
嶋,2976,2982,island (alternate),island (alternate),,,
峯,2977,2983,summit (alternate),summit (alternate),,,
埜,2979,2984,plains (old),plains (old),,,
龍,2981,2985,dragon (old),dragon (old),,,
寵,2982,2986,patronage,patronage,,,
聾,2983,2987,deafness,deafness,,,
慾,2984,2988,longing (old),longing (old),,,
嶽,2987,2989,Point (old),Point (old),,,
國,2988,2990,country (old),country (old),,,
脛,2989,2991,shin,shin,,,
勁,2990,2992,formidable,formidable,,,
祀,2992,2993,enshrine,enshrine,,,
祓,2993,2994,exorcism,exorcism,,,
躇,2994,2995,dither,dither,,,
壽,2995,2996,longevity (old),longevity (old),,,
躊,2996,2997,hesitate,hesitate,,,
饅,2998,2998,bean jam,bean jam,,,
嘔,2999,2999,retch,retch,,,
鼈,3000,3000,snapping turtle,snapping turtle,,,
亙,2985,,span (old),,,,
亨,3001,,go smoothly,,,,
伶,2112,,minstrel,,,,
佑,2126,,adjutant,,,,
佼,2109,,comely,,,,
侑,3002,,condone,,,,
俣,2127,,fork in a road,,,,
倖,2119,,bliss,,,,
傭,2128,,hire,,,,
僻,2117,,biased,,,,
卜,2103,,augury,,,,
喬,2104,,heaven-high,,,,
孟,2872,,start,,,,
尭,2095,,lofty,,,,
峨,2226,,high mountain,,,,
嵯,2230,,rocky,,,,
巌,2978,,boulder (old),,,,
巽,2861,,southeast,,,,
彪,2876,,mottled,,,,
掟,3007,,mandate,,,,
掠,2247,,pillage,,,,
撹,2257,,churn up,,,,
梧,3003,,parasol tree,,,,
欝,2856,,depressed,,,,
欽,3004,,circumspect,,,,
煕,3005,,cheer,,,,
熔,2547,,fuse metal,,,,
珪,2564,,silicon,,,,
瑶,2553,,precious stone,,,,
甫,2097,,offspring,,,,
籠,3028,,cage (Joyo version),,,,
聚,2939,,crowd,,,,
舘,2980,,Bldg. (old),,,,
舜,2915,,rose of Sharon,,,,
詑,2718,,prevarication,,,,
諏,2722,,advise,,,,
躯,2986,,body (old),,,,
郁,2424,,cultured,,,,
鏑,2758,,arrowhead,,,,`};