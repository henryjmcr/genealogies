---
title: 'tc'
date: Fri, 29 Jul 2016 12:13:38 +0000
draft: false
featured_img: 
aliases: [/wp-permalink/771]
---

<div class="entry-post"><h3>MODNLP/TC: an API and tools for text categorisation</h3>
modnlp/tc: an API and tools for text categorisation, including, functionality for XML parsing, term set reduction (and basic keyword extraction), probabilistic classifier induction, two sample classification tools, and evaluation modules. The software is distributed under the GNU General Public License, and is fully compatible with the <a href="http://www.gnu.org/software/classpath/">GNU Classpath</a> It has been tested on a number of JVM's, including kaffe (v1.1.5), sablevm (v1.1.6), jamvm (v1.3) and JDK 1.4+ The functionality supported by the API include:
<ul>
 	<li>General mechanisms for parsing and document storage (currently implemented modnlp.tc.parser.Parsers include a a parser for my <a href="http://modnlp.sourceforge.net/reuters21578.html">XML version</a> of <a href="http://www.daviddlewis.com/resources/testcollections/reuters21578/">David Lewis' Reuters-21578</a> collection, and another for <a href="http://www.aueb.gr/users/ion/">Ion Androutsopoulos'</a> Lingspam corpus for spam filter.</li>
 	<li>a <a href="http://modnlp.sourceforge.net/doc/modnlp/tc/tsr/package-summary.html">feature selection module </a>implementing several term set reduction (filtering) metrics, and a <a href="http://modnlp.sourceforge.net/doc/modnlp/tc/tsr/MakeReducedTermSet.html">sample utility that illustrates its use</a></li>
 	<li>a basic <a href="http://modnlp.sourceforge.net/doc/modnlp/tc/induction/MakeProbabilityModel.html">probabilistic classifier induction program</a>, and</li>
 	<li>modules for classification and <a href="http://modnlp.sourceforge.net/doc/modnlp/tc/evaluation/package-summary.html">evaluation</a>.</li>
</ul>
See the <a href="http://modnlp.sourceforge.net/doc/">API documentation</a> for more details.
<a href="https://sourceforge.net/projects/modnlp/">Download the latest version of modnlp/tc</a>. And have "fun".

See also the <a href="https://sourceforge.net/projects/modnlp/">Developer's web page </a>at Sourceforge.net for the GIT repository</div>