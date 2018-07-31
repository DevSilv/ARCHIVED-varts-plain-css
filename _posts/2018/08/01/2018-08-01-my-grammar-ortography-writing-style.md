---
layout: post
title: "the grammar, orthography and writing style of my articles"
date: 2018-08-01
tags: blogging
---

when you read my articles, you may notice that i write them without capital letters. this may seem strange, like i have made it up for myself and do not care what others would think. but this is only partially true.

## in the old days

the story begins when i was studying software engineering. back then i was writing code to pass my exams and so on. at the beginning of studying, my code was self-explanatory (like probably every code displaying "hello world"). but in the course of time, it was becoming more complex, so i needed (i was thinking i needed) to add comments.

my first comments were not so complex, so i did not need to think them through. they were like "what does a line do". but as i was writing more of them, i started to notice that not every of them is self-explanatory. think of it: when the code needs comments, let alone comments that themselves need clarifying.

so i have started to add those "comments to comments". this meant that instead of writing a one-line comment, i was writing two lines, instead of two – three, and so on.

## improving comments

here i should stop for a while and mention that i have always liked a good writing style. that means several things, including:

- starting each sentence with capital letter and ending it with a period;
- putting all the commas on their places;
- dividing the text into paragraphs;
- following the three-part structure: introduction, body and conclusion;
- and so on.

and, while my comments was becoming more and more complex, i decided to apply these rules in them. i started to add periods, commas and paragraphs. OK, the last rule seems to fit worse, so i did not use it.

as the time was passing, i was writing more code (and more comments). i graduated, finished to writing code for passes and started to writing it only for my own projects.

## git and github problems

the situation changed when i signed up for github and started publishing my work (OK, not so long ago). i also started to use git, since github uses it.

one day i have realized the following situation:

- in git, i started sentences with capital letters, but i did not put period at their end.
- in one project on github, in comments within code i started sentences with capital letters and put period.
- in all other places on github, i did not start sentences with capital letters, but also put period.

what is interesting, this situation turned out to be fully reasoned:

- in git, i had decided to follow rules from a recommendation (now i do not remember what was it).
- in that project on github, i wanted to be fully linguistically correct – for two reasons:
    - i wanted to know whether a comment had not been fragmented;
    - i was uncertain of my english skills.
- in all other places on github, i had chosen lowercase because i preferred it, possibly visually; and periods because otherwise i would not be able to write multiple sentences in one paragraph.

**tip:** for polish readers who want to keep the feeling of continuity of my posts, i have also written about that situation here: https://4programmers.net/Mikroblogi/View/28114#entry-28114

## consistency is the king

i concluded that this situation implies that i should regard the following places:

- git commit messages (which are public on github);
- github issues;
- all kinds of github comments;
- github READMEs and wikis;
- github projects;
- my blog (later added to this list).

but i have realized that there is a problem: consistency, which meant that all of the following have to be consistent:

1. the writing style;
2. the grammar;
3. the orthography.

## the solution

so, i have gone over it and decided to search for some rules that would help me. the following places in the internet have helped me with the research, among others:

- [the GNU comments writing standard](https://www.gnu.org/prep/standards/html_node/Comments.html)
- [a chris beams post about committing in git](https://chris.beams.io/posts/git-commit#capitalize)
- [a zhiming wang post about commit messages](https://archive.zhimingwang.org/blog/2015-08-05-switching-to-capitalized-commit-messages.html)
- [a stackoverflow question on periods](https://softwareengineering.stackexchange.com/questions/17766/what-are-your-thoughts-on-periods-full-stops-in-code-comments)
- [git commit guidelines](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines)

as a result, i have created rules, my own rules that i will follow. what was important, i have determined that there should be three sets of different rules:

1. rules for comments within code;
2. rules for commit messages in git;
3. rules for other comments and "standalone" texts.

## the rules

### 1. general rules

- i do not use capital letters. this rule is possibly the greatest change that i did to the usual orthography, so i am going to give more details on it. from what i have written so far, i have two options to keep consistency:
    1. use capital letters whenever it is recommended by the general orthography rules and guidelines (e.g. the git guidelines);
    2. avoid using capital letters at all.

    if i had chose the first, it would have been harder to explain for me the notation of git commit messages (what capital letters for, if there is only one sentence?) and comments in the code (there SHOULD be only one sentence). so i chose the latter.
    
    exceptions to this rule are:
    - acronyms – for example "USA";
    - words that could be confused if not written with capitals – for example programming language symbols (function names, parameter names, and so on) and mathematical, physical or technical symbols ("K" – kelvin, "GB" – gigabyte, and so on).
- i avoid using colloquial terms.
- i do not shorten expressions with apostrophe – that is, i do not write "i'm", only "i am".

it is worth mentioning that although my native language is not english, i chose to use english everywhere. but this is probably obvious on such a site similar to an english blog, so i will not mention it as a rule.

### 2. rules for comments within code

these rules seem to be harder to follow, as this kind of comments is for me a floating thing. it is probably mainly because of existing of possibility of self-explanatory code.

- if the code is self-explanatory, i avoid putting comments.
- if possible, i write a [verbless sentence](http://queens-english-society.org/verbless-sentences/) and do not use period.
- if verbless sentence is not possible, i write full sentence and use period.
- i avoid multiline comments.
- i do not omit the "that" word between clauses.

### 3. rules for commit messages in git

i try to treat commits in git as they are treated [in its own documentation](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines). it means that i use the imperative present tense – for example "add a new class" instead of "adding a new class". additionally, i treat the verbs as "non-personal indicators" of what is done, not as predicates (so i do not inflect them for person).

therefore:

- i avoid verbless sentences.
- i try to fit the whole message into one sentence.
- i do not end the last sentence with a period.
- i avoid articles (a, an, the) and some conjunctions (if, then, but).
- i avoid eloquence (so, but, instead of).

### 4. rules for other comments and "standalone" texts

these rules seem to be easier to follow, since i treat "other comments" as "standalone" texts, and since the "standalone" texts usually have their own fixed rules.

- i avoid to write verbless sentences.
- i always end a sentence (either full or verbless) with a period. one exception is when the sentence ends with a link that i think the readers may want to copy manually.
- i do not omit the "that" word between clauses.
- if possible, i divide the text into relatively short paragraphs.
- if possible, i try to apply the three-part structure: introduction, body and conclusion.

these are not all the rules that i try to follow. the other part is earlier described by me here: https://silvuss.github.io/2018/07/10/the-things-that-every-blogging-developer.html

## i follow these rules… so what then?

one may ask: should others follow your rules, or should they avoid them?

**my first advice is to avoid them.** a couple of reasons:

1. i created them myself – and i am a layman, i have only a small background in writing.
2. they are breaking some other well acknowledged rules, for example in the orthography field: https://en.oxforddictionaries.com/spelling/using-capital-letters
3. they are not well-reasoned in any field (except my own ideas).
4. the text without capital letters is less natural, therefore harder to read and easier to make a mistake.

my second advice is as follows: **if you are looking for rules to follow, stick to these:**

- [a subset of mine – dedicated to everybody, not just myself](https://silvuss.github.io/2018/07/10/the-things-that-every-blogging-developer.html)
- [a usual english grammar described by the oxford university]( https://en.oxforddictionaries.com/grammar)
- similar that are used in your language, institution, region or country.