---
title: 'Tec tools'
date: Fri, 29 Jul 2016 13:17:23 +0000
draft: false
featured_img: 
aliases: [/wp-permalink/783]
---

<div class="entry-post"><h3>MODNLP-tec: A corpus management suite</h3>
The <strong>modnlp</strong> corpus management suite, which consist of modnlp-idx (the indexer), modnlp-teccli (the corpus/concordance browser) and modnlp-tecser (the corpus server), were originally developed to allow free access to linguistic material over the Internet.

The indexer, <a href="http://genealogiesofknowledge.net/idx/">modnlp-idx</a>, allows you to create an index, which you can later access through the TEC (<a href="http://genealogiesofknowledge.net/translational-english-corpus-tec/">Translational English Corpus</a>) browser (modnlp-teccli). The corpus will usually contain data (e.g. text-orienteds XML files, which we refer to as text files) and "meta-data" (perhaps stored as separate XML files, which we refer to as header files. It is not essential that data and meta-data be stored in separate files or encoded in XML. However, if you would like to be able to select sub-corpora, for instance, in order to make the concordancer display only concordances coming from texts that share certain features (e.g. all texts whose source language is Japanese), you need to create meta-data files describing the features of interest and link them back to the appropriate sections of the text files. The following files illustrate a typical pair of corpus text and header files:
<ul>
 	<li><a href="http://modnlp.sourceforge.net/EN20050110.xml.html">EN20050110.xml</a> is the text file (borrowed from the <a href="http://www.ecpc.uji.es/">ECPC corpus</a>), though it also contains meta-data. Things can be arranged so that only the text between pre-specified tags will be indexed. These tags are specified in the property file of modnlp-idx. Property settings that would be suitable for this kind of data are shown in <a href="http://modnlp.sourceforge.net/idxmgr.properties">this property file</a>. The following lines, for instance, state that the only the text within 'speech' and 'writing' element pairs will be indexed, and that they will be uniquely identified by the value of their attribute 'ref' (ideally, a suitable DTD should also guarantee that the elements and attributes exist and that the uniqueness of 'ref' values is enforced) :</li>
</ul>
<span style="color: #cc99ff;">subcorpusindexer.element=(speech|writing)</span>
<span style="color: #cc99ff;"> subcorpusindexer.attribute=ref</span>

The following line specifies which text will NOT be indexed. The specification is done through a regular-expression matching element names that surround text which one does not wish to index:

<span style="color: #cc99ff;">tokeniser.ignore.elements=(omit|ignore|header|chair|heading|post|name)</span>
<ul>
 	<li><a href="http://modnlp.sourceforge.net/EN20050110.hed.html">EN20050110.hed</a> is the header file. The modnlp tools allows the meta-data encoded in the header files to be "queried" in XQuery. This is used to select sub-corpora. The following lines in the idxmgr.properties files define how sub-corpora are selected for the ECPC files:</li>
</ul>
<span style="color: #cc99ff;">xquery.root.filedescription.path=/header</span>
<span style="color: #cc99ff;"> xquery.attribute.chooser.specs=File name;../../header/@filename;Spoken language;speech/@language;Written language;writing/@language;Affiliation;(speaker|writer)/affiliation/@EPparty</span>

The first line specifies the topmost level of the header file (it's root element). The second line Contains XML "paths" to the features which we would like to use to define sub-corpora (preceeded by a human-readable description of the same).

Similarly, the last line specifies part of an XQuery expression which the system uses to present a description of each file in the corpus to the user.

<span style="color: #cc99ff;">xquery.file.description.return={data($s/@filename)}{data($s/@language)}{data($s/index/label)}, {data($s/index/place)}, {data($s/index/date)}, {data($s/index/edition)}</span>

If you would like to test and/or use the software, a binary distribution of the client (which also run in stand-alone mode, using a local index creted by idx), download the <a href="http://modnlp.sourceforge.net/teccli.html">modnlp-teccli</a> module.

If you want to make corpus data and concordances (though not necessarily your full texts) available to the community over the Internet your should download the <a href="http://modnlp.sourceforge.net/tecser.html">modnlp-tecser</a> module.

In addition, the entire suite is <a href="https://sourceforge.net/projects/modnlp/">available for download</a>.

A live example of these tools in action is the <a href="http://ronaldo.cs.tcd.ie/tec2/jnlp/">TEC Corpus Browser</a>, available on the web, where you can try the concordancer prototype and a few of its "plug-ins", via Java Web Start.

More information on the TEC client/server architecture can be found in the following paper:
• S. Luz. Web-based corpus software. In A. Kruger, K. Wallmach, and J. Munday, editors, <em>Corpus-based Translation Studies - Research and Applications</em>, chapter 5, pages 124-149. Continuum, 2011. [ bib | .<a href="http://modnlp.sourceforge.net/LuzCTSBook2011.pdf">pdf </a>]

A useful <a href="http://modnlp.sourceforge.net/doc/tutorials/SallyMarshall-CorpusBuildingwithTECToolsDec2011.pdf">tutorial</a> on how to use the modnlp/tec suite to create and index a corpus was edited by Sally Marshall.</div>