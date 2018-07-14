# the things that every blogging developer should know

## version of this article

this is version 2.1.0.

## introduction

this article contains tips for bloggers that are programmers (or testers, or similar). i wrote it, because i read a lot (i thinks so) of articles online, much of them talking about programming, code or just being more or less technical. however, i see that some of them breaks some rules i would like them to hold. consequently, i have decided to verbalize and write down this rules. i assume it may be helpful for you.

**you should treat the tips as my own reflections. i used only a few sources while writing. therefore, there are only a few links in the text.**

in the tips, i am assuming that **you** are writing **an article**. it will always be read by some **readers**. it may contain **text**, and optional **code**, **images**, **videos** and **links**. if you provide code, it means for me that you usually split it into **listings**.  the article that you are writing should have **the primary subject** (== the subject), and may have some **secondary subjects**. both you **analyse** or **describe** in the articl. here and there i assume that you write the article **in english**, but generally you can write it **in any language** and the tips will still apply.

**remember, these rules may not fit all kinds of articles that you write / you want to write. if you are not familiar with some of them, you can (1) stop reading, or (2) message me on github – so i could consider changing or even removing them.**

## the tips

### 1. write shortly.

readers of your article may fulfil one or more of the following conditions:
1. the article's language is not their native langue.
2. they may want to read the article, but be tired.
3. they may not want to read the article, but have to for some reason.

therefore, when you write:
- **long sentences** – readers might lost the context, or even the predicate (that is, in general, the verb).
- **long paragraphs** – readers might lost the context, the meaning of the current topic or the topic as a whole.
- **long listings** – readers might lost the way how a listing is related to the issue or subject that it illustrates (see also the tip nr 2).

if an issue is too complex for a short sentence, paragraph or listing, just provide more sentences, paragraphs and listings.

### 2. code, images, videos and links should only illustrate a subject, not describe it.

if code, images, videos or links seem to **be as important, or more important** than text, then maybe there is too little text. if code, images, videos or links seem to **describe** text, maybe you should split it into more articles.

### 3. code, images, videos and links should be as difficult as text.

code (or an image, a video, or a link) that is more difficult than text will make the readers confused; if it is easier than text, it could make the readers wrong.

### 4. examples should speak for themselves.

if you provide examples, try to keep them accurate – and if you cannot, tell the readers about it. a poor example **with** an indication that it is poor is better than no example. even more, no example is better than a poor example **without** an indication that it is poor.

### 5. readers should try to understand the subject, not the article.

simple problems described in a complex way become complex. always write simple, clear, and short sentences – no matter that you are either describing the basics, or an advanced topic.

### 6. when possible, provide reasons.

this tip is loosely relate to the previous one: readers should understand, why something is introduced in the article. therefore, wherever possible, explain why you wrote something. if you cannot, that might mean you should create a new article describing this thing.

### 7. keep YAGNI.

this tip is loosely related to the previous one: readers should understand, why something is introduced in the article. therefore, do not describe subjects, topics, issues, aspects, cases or even phrases that are not related somehow to the main subject. if you cannot relate something to the main subject, or even to a secondary subject, that might mean you should create a new article describing this thing.

In programming, this rule is best described by the term [_YAGNI_](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) (You Aren't Gonna Need It).

### 8. if you describe several issues, mind the proportions.

if the article discusses several issues of the main subject, try to keep proportions in the length of their descriptions. for example, if the first and the second issue are described in one paragraph each, try to include the third and fourth in no more than three each. otherwise, some issues may seem to be more important, just because you described it in a more extensive way.

### 9. choose the words that you already use.

the article you are writing is not a chapter of a novel. it is better to repeat a word four times than to provide four different words instead, each describing the same concept (remember about non-english readers, who do not have a wide range of vocabulary).

### 10. be consistent when telling the readers what is right.

if the first paragraph tells the readers "you should do X", and the latter "you have to do X", they will be **confused**. in the opposite case, if firstly comes "you have to", and then "you should", they could be **mistaken**.

### 11. do not demand from the readers to leave your blog.

among other things, readers may want to leave your blog when they do understand something or they lack of some information. try to fulfil the following points:
- **tell readers whether the subject you describe is up-to-date,** e.g. if it is something changing fast, like a library (or even one version of it). inform the readers about the version that you describe, and whether this version is up-to-date. make it clear if it is not.
- **assume that readers know only the basics,** and if you have to assume that they have any advanced knowledge about the subject, then mention it in the introduction (so that anybody who do not have the proper knowledge may exit early).
- **assume that this article is the first that the readers read on this subject.** inform the readers whether the subject is already widely discussed (in the internet, in books and the like) and summarize it (as far as you can). if it would be too much information, provide links.

### 12. code rarely speaks for itself. images rarely speak for themselves. videos rarely speak for themselves. links rarely speak for themselves.

if you do not provide a description, the readers may lost the context. always provide an explanation for a listing, an image, a video and a link, if it helps understand the subject (even as a more extensive comment or caption). generally, if it is not a description, but you used it instead of text, it probably need one.

### 13. enumerate cautiously.

if you write "firstly", do not change the "secondly" for "next", or "later" or similar – otherwise the readers will get lost. if it is turning out to be more than three points, enumerate them by numbers instead of words (preferably starting each from a new line).

### 14. use phrases like "but", "however", "instead" and "although" cautiously.

if you write two expressions and join them with one of these words, readers usually expect two things at once:
1. both expressions deal with the same subject (not to be confused with the main and secondary subjects of the whole article);
2. the second expression will be in contradiction with the first.

you may create one sentence, but you may also write the expressions as separate sentences. whichever the case, if you:
- write the first expression not **directly** after the other (i.e. you divide it with another one), the readers might get confused.
- add a third expression **in contradiction to both**, the readers might get confused.
- add a third expression **in contradiction to one of them**, the readers might get confused.

### 15. use phrases like "may", "might", "can", "could", "must" and "have to" cautiously.

you may see nothing wrong with these phrases, but they are often confusing in terms of technical description. i find it most useful to use them as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

_**tip:** if you are not aware of what RFC (Request for Comments) is, see [Wikipedia's article on RFC](https://en.wikipedia.org/wiki/Request_for_Comments)._

### 16. use phrases like "believe", "want to" and "seem" cautiously.

this tip is similar to the previous one: you may see nothing wrong with these phrases, but they are often confusing in terms of technical description.

if you speak about yourself, remember that the readers may believe, desire and something may seem to them differently than you believe, desire and something seems to you.

if you speak about other people, remember that if you write:
- "it is believed" – you probably want to say "they say so, but i am not sure", but be careful whether this does not start to mean "nobody is sure, but they say so".
- "somebody wanted to do something" – you probably want to say "somebody did something", but be careful whether this does not start to mean "somebody wanted to do something, but nobody can say whether he/she really did".
- "it seems to be" – you probably want to say "i think it is, and you can think so, but i am not sure", but be careful whether this does not start to mean "i think it is, but i am not sure, so you should not think it is".

### 17. a note about "-" (or "–", or "—").

the characters: "-" (hypen<sup>1</sup>), "–" (en dash<sup>2</sup>) and "—" (em dash<sup>3</sup>) are commonly used to denote a part of a sentence which is **separated** (among other uses). consequently, if you write one of those character in a sentence, the readers **may presume one of two things**:
- the current thought (or expression, or clause) is the last in the sentence.
- the current thought (or expression, or clause) will be followed by another same character.

therefore, if you had wanted to add the second character, but forgot it somehow, the readers may assume one of two things:
- the current thought (or expression, or clause) is **the last in the sentence** – and while it is not true, the readers will be mistaken.
- the current thought (or expression, or clause) is **incomplete** – which does not always mean that the readers will be mistaken, but always means that they will be confused.

_**tip:** if you are not aware of what to use which of the aformentioned character, see this [Wikipedia's guide on hyphens and dashes](https://en.wikipedia.org/wiki/Wikipedia:Hyphens_and_dashes), and also articles about [dashes](https://en.wikipedia.org/wiki/Dash) and [hypens](https://en.wikipedia.org/wiki/Hyphen)._

---

<sup>1</sup> for polish readers: "-" to "łącznik" lub "dywiz".

<sup>2</sup> for polish readers: "–" to "półpauza".

<sup>3</sup> for polish readers: "—" to "pauza" lub "myślnik".