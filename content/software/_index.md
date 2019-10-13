---
title: 'Software'
date: Fri, 29 Jul 2016 10:58:08 +0000
draft: false
featured_img: 
aliases: [/wp-permalink/746]
---

<div class="entry-post"><p style="text-align: center;"><a class="fasc-button fasc-size-medium fasc-type-flat fasc-rounded-medium" style="background-color: #33809e; color: #ffffff;" href="http://genealogiesofknowledge.net/software/">GoK Tool</a>&nbsp;<a class="fasc-button fasc-size-medium fasc-type-flat fasc-rounded-medium" style="background-color: #9e337a; color: #ffffff;" href="http://genealogiesofknowledge.net/software/manual/#plug">Plugins</a>&nbsp;<a class="fasc-button fasc-size-medium fasc-type-flat fasc-rounded-medium" style="background-color: #33589e; color: #ffffff;" href="http://genealogiesofknowledge.net/software/manual/">User Manual</a>&nbsp;<a class="fasc-button fasc-size-medium fasc-type-flat fasc-rounded-medium" style="background-color: #7c339e; color: #ffffff;" href="http://genealogiesofknowledge.net/software/developers/">Developers</a></p>

The corpus analysis software under development for this project is available as a Java WebStart tool. This software connects a <a href="#modnlp">modnlp-based</a> concordance browser to the most recent update of the <a href="http://genealogiesofknowledge.net/genealogies-knowledge-corpus/">Genealogies corpus</a>. You can start the tool by clicking on this button:
<p style="text-align: center;"><a class="fasc-button fasc-size-large fasc-type-glossy fasc-rounded-medium fasc-style-bold" style="background-color: #2e1a91; color: #ffffff;" href="http://www.genealogiesofknowledge.net/gok/jnlp-beta/gok.jnlp">Start GoK Tool</a></p>
If you have not already done so, we recommend that you install the latest version of <a href="https://java.com/">Java.</a>

Additionally, the software code and plugins are available for download at : <a href="https://sourceforge.net/projects/modnlp/">https://sourceforge.net/projects/modnlp/</a>

<strong>Note:</strong> The first time that you download and attempt to launch the software, you may receive a system security warning. Instructions on how to resolve this are provided below:

<ul><li><em>Apple users</em>: Go to 'System Preferences', click on 'Security &amp; Privacy', then click ‘Open anyway’.</li>
 	<li><em>Windows users</em>: Go to the 'Start' Menu and search for 'Configure Java'. Having opened this panel, choose the 'Security' tab and click 'Edit Site list'. Click 'Add' and add the following web address to the list:&nbsp;http://genealogiesofknowledge.net/. Click 'Ok' and you should now be able to access the software.</li></ul>
Given that&nbsp;Modnlp and these plugins are still under construction and as such are frequently updated, it is recommended that users&nbsp;<span style="font-size: 15.2015px;">regularly</span><span style="font-size: 15.2015px;">&nbsp;delete all existing versions of the software from their workstation and re-download the browser from this page. This will ensure that you continue to work with the latest version of the software available as the project evolves.</span>

Should you encounter any software bugs or other technical problems when using these tools, please create a ticket detailing the nature of the issue on our SourceForge project page: <a href="https://sourceforge.net/p/modnlp/tickets/">https://sourceforge.net/p/modnlp/tickets/</a>

{{< verticalspacer 20 >}}
<h4><strong>MODNLP: Modular Suite of NLP Tools</strong></h4>
<strong>modnlp</strong> aims to provide a modular architecture and tools for natural language processing written (mainly) in Java. These tools are being developed in connection with the Genealogies of Knowledge project.

The following modnlp modules are currently available:
<ul>
 	<li><a href="http://genealogiesofknowledge.net/idx/">idx</a>: an API and tools for (inverted) indexing, storage and retrieval of large amounts of text, with (XML-based) handling of meta-data.</li>
 	<li><a href="http://genealogiesofknowledge.net/software/developers/:%20http:/genealogiesofknowledge.net/tc/">tc</a>: an API and tools for text categorisation, including, functionality for XML parsing, term set reduction (and basic keyword extraction), probabilistic classifier induction, two sample classification tools, and evaluation modules.</li>
 	<li><a href="http://genealogiesofknowledge.net/software/developers/%20http:/genealogiesofknowledge.net/tec-tools/%20">tec-tools</a>&nbsp;(v2), consisting of tec-server, a corpus indexer and server for corpus access and analysis over the web and tec-client: a corpus analysis client. Unlike the (now obsolete) version 1 of these tools, originally developed for the <a href="http://genealogiesofknowledge.net/translational-english-corpus-tec/">TEC project</a>, and written in Perl, C (server side) and Java, the version in this site (v2) is written entirely in Java.</li></ul>
This new version of the tools forms the basis of software support for text analysis and visualisation in the Genealogies of Knowledge project.

The modnlp/tec tools have also been used by the <a href="http://www.ecpc.uji.es/">European Parliamentary Comparable and Parallel Corpora project</a> (ECPC) coordinated by Dr. Calzada Pérez (Universitat Jaume I, Spain), and by the <a href="http://genealogiesofknowledge.net/translational-english-corpus-tec/">Translational English Corpus</a>, which has been collected and maintained under Prof Mona Baker’s supervision at the University of Manchester, and made available on the Internet through the Genealogies of Knowledge project website, in a collaboration between The University of Edinburgh and The University of Manchester.

Also available is the <a href="http://modnlp.sourceforge.net/doc/">documentation of the modnlp </a>suite (for developers).</div>