# versioning system of my articles

## version of this article

this is version 1.2.0.

## introduction

_**tip:** if you are not aware of what versioning is, you can look at https://en.wikipedia.org/wiki/Version_control or https://en.wikipedia.org/wiki/Software_versioning._

most of the blog posts on the internet (probably) are versioned this or that way.

some of them use a technique (in my opinion, the best for blogs) of assigning some sort of a date. sometimes the date on which the post was created, and sometimes, on which it was published.

but there is a problem: if the author change the post, the reader cannot easily verify if the post was changed (although it knows that it is always the latest). tt has to read the whole post and compare to the version it has read earlier. but not every reader remember all the blog posts it read.

so, the other ones improves this technique. besides the date, they also provides information that the post was changed (a `true`/`false` value). it allows the reader to generally be aware that the post was changed.

some of them improves it even more, and (to the aformentioned information) add the date on which the post was changed (or on which its changed version was published). sometimes you can also find there a link to the changed version. personally, i find it very helpful, if i know that the subject which this article describes has changed a lot.

## so, which one of these three techniques do i use in this place?

neither. the technique that i use differs from all of the described. i borrowed my way of versioning from software versioning. there are probably many standards of software versioning, but i have chosen [**semantic versioning**](https://semver.org/) standard (it is used, for instance, [in npm](https://docs.npmjs.com/getting-started/semantic-versioning)).

for details see the link, but for now you should know that a version in this standard consists of three "subversions" (i.e. numbers; usually divided by dots):
1. major version,
2. minor version,
3. patch version,

so it generally looks like `1.2.0`.

## OK, but this standard is meant for software. how could i use it in the context of an article?

i can do that, because of the following three rules that i apply to every article in this place:
1. if i change the post appearance or its style of writing, or if i fix a typo (that is, the meaning of all the content remains more or less the same), then i change **the patch version**.
2. if i remove, add or change any part of the meaning of the content in particular sections, then i change **the minor version**.
3. if i remove, add or change any part of the meaning of the section headers, or change the sections order, or change the title of the article, then i change **the major version**.

## where you can find the version number in a post?

on the internet versions are almost always placed in the "meta-information" of a post – that is, directly above it (in the header) or directly below it (in the footer). i chose to place it in the header, directly above every article (between the title and the introduction section).