---
layout: post
title: "the versioning system of my articles"
date: 2018-07-10
tags: programming
---

this article describes what is the versioning system that i apply to my articles.



_tip: if you are not aware of what software versioning is, you can look at [version control on wikipedia](https://en.wikipedia.org/wiki/Version_control) or [software versioning on wikipedia](https://en.wikipedia.org/wiki/Software_versioning)._

## introduction

most of the blog posts on the internet (probably) are versioned this or that way.

some of them use a technique (in my opinion, the best for blogs) of assigning sort of a date. sometimes it is the date on which the post was created, and sometimes that on which the post was published.

but there is a problem with such a versioning: if the author change the post, the readers cannot easily verify whether the post was changed (although they know that it is always in the latest version). they have to read the whole post and compare it to the version that they had read earlier.

but not all the readers remember all the blog posts they read. so, the other bloggers improve this technique. besides providing the date, they also provide an information that the post was changed (usually "this article is outdated", "this article has newer version" or similar). it generally allows the readers to be aware that there is a change in the content of the post.

some of the bloggers improve it even more, and (to the date and an information whether the post changed) add the date on which the post was changed (or on which its changed version was published). sometimes you can also find there a link to the changed version. personally, i find this very helpful.

## so, which one of these three techniques do you use in your articles?

neither. the technique that i use differs from all of the described. i borrowed my way of versioning from software versioning. there are probably many standards of software versioning, but i have chosen [**semantic versioning**](https://semver.org/) standard (it is used, for instance, [in npm](https://docs.npmjs.com/getting-started/semantic-versioning)).

for details see the link, but for now you should only know that a version in this standard consists of three "subversions" (i.e. numbers; they are usually divided by dots):
1. major version,
2. minor version,
3. patch version.

it looks like `1.2.0`.

## OK, but this standard is meant for software. how could you use it in the context of an article?

i can do that, because of the following three rules that i apply to every article in this place:
1. if i change the post appearance or its style of writing, or if i fix a typo – that is, the meaning of all the content remains more or less the same – then i change **the patch version**.
2. if i remove, add or change any part of the meaning of the content in particular sections of the article, then i change **the minor version**.
3. if i remove, add or change any part of the meaning of the section headers, or change the sections order, or change the title of the article, then i change **the major version**.

## where i can find the version number in a post?

on the internet versions (if they are provided) are almost always placed within the "meta-information" of a post – that is, directly above it (in the header) or directly below it (in the footer). i chose to place it in the header, directly above every article (between the title and the introduction section).

## version of this article

this is version 1.3.1.