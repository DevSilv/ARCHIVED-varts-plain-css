---
layout: post
title: "the grammar, orthography and writing style of my articles"
date: 
tags: blogging
---

when you read my articles, you may notice that i write them without capital letters. this may seem strange, like i have made it up for myself and do not care what others would think. but this is only partially true.

## beginning with comments

the story begins when i was studying software engineering. back then i was writing code to pass my exams and so on. at the beginning of my studying, the code was self-explanatory (like probably every code displaying "hello world"). but in the course of time, it was becoming more complex, so i needed (i was thinking i needed) to add comments.

my first comments were not so complex, so i did not need to think them through. they were like "what does a line do". but as i was writing more of them, i have started to notice that not every of them is self-explanatory. think of it: when the code needs comments, let alone comments that themselves need comments.

so i have started to add those "comments to comments". this meant that instead of writing a one-line comment, i was writing two lines, instead of two – three, and so on.

## comments are not code

here i should stop for a while writing about code and mention that i have always liked a good writing style. that means several things, including:

- starting each sentence with capital letter and ending it with a period;
- putting all the commas on their places;
- dividing the text into paragraphs;
- following the three-part structure: introduction, body and conclusion;
- and so on.

and, while comments was becoming more and more complex, i decided to apply these rules in that field. i was adding periods, commas, and paragraphs. the last rule seems to fit worse, so i did not use it.

as the time was passing, i was writing more code (and more comments). i graduated, finished to writing code for passes and started to writing it only for my own projects.

## let us change something

the situation changed when i was about signing up for github and starting publishing my work (OK, not so long ago). i also started to use git.

i have realized that comments are not the only pieces of text that i have to regard (no matter for myself or for the others). another included:

- git commit messages (public on github);
- github issues;
- all kinds of github comments;
- github READMEs and wikis;
- github projects;
- my blog (later added to this list).

after realizing that, i have determined possible problems. the main turned out to be consistency, and i have determined that all of the following have to be consistent:

1. the writing style;
2. the grammar;
3. the orthography.

so, i have gone over it and decide to search for some rules that would help me. the following places in the internet have helped me with the research, among others:

- [the GNU comments writing standard](https://www.gnu.org/prep/standards/html_node/Comments.html)
- [a chris beams post about committing in git](https://chris.beams.io/posts/git-commit#capitalize)
- [a zhiming wang post about commit messages](https://archive.zhimingwang.org/blog/2015-08-05-switching-to-capitalized-commit-messages.html)
- [a stackoverflow question on periods](https://softwareengineering.stackexchange.com/questions/17766/what-are-your-thoughts-on-periods-full-stops-in-code-comments)
- [git commit guidelines](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines)

**tip:** for polish readers who want to keep the feeling of continuity of my public posts, i have also written about it here: https://4programmers.net/Mikroblogi/View/28114#entry-28114

as a result, i have created rules, my own rules that i will follow.

what was important, i have determined that there should be two sets of different rules:

1. rules for comments within code;
2. rules for other comments and "standalone" texts.

## the rules

### 1. general rules

- i do not use capital letters. exceptions are:
    - acronyms – for example "USA";
    - words that could confuse if not written with capitals – for example programming language symbols (function names, parameter names, and so on) and mathematical, physical or technical symbols ("K" – kelvin, "GB" – gigabyte, and so on).
- i avoid using colloquial terms.

it is worth mentioning that since my native language is not english, i chose to use english everywhere. but this is probably obvious on such a site similar to an the english blog, so i will not mention it as a rule.

### 2. rules for comments within code

these rules seem to be harder to follow, as this kind of comments is for me a floating thing. it is probably mainly because of existing of possibility of self-explanatory code.

- if the code is self-explanatory, i avoid putting comments.
- if possible, i write a [verbless sentence](http://queens-english-society.org/verbless-sentences/) and do not use period.
- if verbless sentence is not possible, i write full sentence and use period.
- i avoid multiline comments.

### 3. rules for other comments and "standalone" texts

these rules seem to be easier to follow, since i treat "other comments" as "standalone" texts, and since the "standalone" texts usually have their own fixed rules.

- i avoid to write verbless sentences.
- i always end a sentence (either full or verbless) with a period. one exception is when the sentence ends with a link that i think the readers may want to copy manually.
- i do not shorten expressions with apostrophe – that is, i do not write "i'm", only "i am".
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

my second advice is as follows: **if you are looking for good rules to follow, stick to these:**

- a subset of mine – dedicated to everybody, not just myself: https://silvuss.github.io/2018/07/10/the-things-that-every-blogging-developer.html
- a usual english grammar: https://en.oxforddictionaries.com/grammar
- similar that are used in your language, institution, region or country.