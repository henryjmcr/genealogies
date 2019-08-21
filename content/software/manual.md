---
title: 'Manual for using the Genealogies Corpus Analysis Software'
date: Wed, 21 Mar 2018 15:23:49 +0000
draft: false
featured_img: /wp-content/uploads/2018/04/BlankcorpusFile.png
aliases: [/wp-permalink/3558]
---

<div class="entry-post">This page aims to provide a user-friendly guide to the corpus analysis software that is currently being developed for the Genealogies of Knowledge project.

Information about the content of our corpora can be accessed <a href="http://genealogiesofknowledge.net/genealogies-knowledge-corpus/corpus-contents/">here.</a>

For suggestions as to the kinds of research that might be conducted using these new tools, please see the <a href="http://genealogiesofknowledge.net/research-avenues/">Research Avenues</a> section of the website.

Should you encounter any software bugs or other technical problems when using these tools, please create a ticket detailing the nature of the issue on our SourceForge project page: <a href="https://sourceforge.net/p/modnlp/tickets/">https://sourceforge.net/p/modnlp/tickets/</a>

{{< verticalspacer 20 >}}

<hr />

<h3>Table of contents</h3>
&nbsp;
<ul>
 	<li><a href="#CB">Concordance Browser</a></li>
 	<li><a href="#search">Search options:</a>
<ul>
 	<li><a href="#keywords">Single Keywords</a></li>
 	<li><a href="#wild">Wildcards</a></li>
 	<li><a href="#seq">Sequences</a></li>
 	<li><a href="#regex">Regular Expressions</a></li>
</ul>
</li>
 	<li><a href="#sort">Sort</a></li>
 	<li><a href="#extract">Extract</a></li>
 	<li><a href="#meta">Metadata</a></li>
 	<li><a href="#delete">Delete Line</a></li>
 	<li><a href="#sel">Subcorpus Selection</a></li>
 	<li><a href="#opt">Options and Preferences</a></li>
 	<li><a href="#plug">Plugins:</a>
<ul>
 	<li><a href="#fl">Frequency List</a></li>
 	<li><a href="#corpbrowser">Corpus Description Browser</a></li>
 	<li><a href="#mosaic">Mosaic Visualisation</a></li>
 	<li><a href="#tree">Concordance Tree</a></li>
</ul>
</li>
 	<li><a href="#greek">Using the Greek Corpus</a></li>
 	<li><a href="#arabic">Using the Arabic Corpus</a></li>
</ul>
{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="CB">Concordance Browser</h3>
&nbsp;

Once you have <a href="http://genealogiesofknowledge.net/software/">downloaded and launched the software,</a> a screen similar to the one shown below will be presented:

<img class="alignnone size-full wp-image-3703" src="/wp-content/uploads/2018/04/BlankcorpusFile.png" alt="" width="1001" height="584" />

Click on 'File' to choose the language corpus you wish to work with. <a href="http://genealogiesofknowledge.net/guidance-using-modern-english-corpus/">'English' </a>is the default corpus unless you choose another corpus from the drop-down menu. For more information about the content and design of each of the corpora, <a href="http://genealogiesofknowledge.net/genealogies-knowledge-corpus/">please click here.</a>

It is also possible to access other remote corpora via the Genealogies interface. For example, in order to access the <a href="http://genealogiesofknowledge.net/translational-english-corpus-tec/">Translational English Corpus (TEC),</a> go to 'File'-&gt;'New remote corpus...' and enter <strong>genealogiesofknowledge.net:1240 </strong>as the IP address of the new corpus server.

The 'Options' menu allows you to make a number of choices relating to how you access the corpora. 'Plugins', on the other hand, are additional tools (mostly tools of analysis) which facilitate working with the corpus and provide further information on the texts, such as frequency lists and details about the content of each corpus. All of these features are explained below.

A keyword search will populate the concordance browser window, displaying the Filename, Left Context, Keyword and Right Context for each line of text in the corpus that matches this search string.

The width of each column can then be adjusted manually by clicking and dragging the divider bars separating each column header. This is often useful when working with unusually long or short keywords.

The total number of 'hits' for a search query is displayed at the foot of the corpus browser window. In the screenshot below, for example, the software tells us that there are 6110 instances of the keyword <em>democracy </em>in the corpus selected.

<img class="alignnone wp-image-3679 size-full" src="/wp-content/uploads/2018/04/browser_3.png" alt="" width="1106" height="582" />

Individual concordances can be saved to your computer as a CSV file via the 'File' menu ('File-&gt;Save concordances...'). This can be <a href="https://support.office.com/en-ie/article/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba">imported into a spreadsheet and manipulated using software such as Microsoft Excel</a>.

<img class="alignnone wp-image-3680 size-full" src="/wp-content/uploads/2018/04/File-Save-3.png" alt="" width="1104" height="583" />

{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="search">Search options</h3>
&nbsp;

<strong>Note:</strong> The following description of search options is based on using the Genealogies English corpus. Because Latin shares the same script, the description will also be relevant to the use of the Latin corpus. In order to view more specific information on using the Greek and Arabic corpora, please click on the links below:
<ul>
 	<li><a href="#greek">Using the Greek corpus</a></li>
 	<li><a href="#arabic">Using the Arabic corpus</a></li>
</ul>
&nbsp;
<h5 id="keywords">Single Keywords</h5>
Single keywords may be typed into the search bar to retrieve a concordance of all lines in the corpus containing the keyword.

The search function is by default not case-sensitive so a search for <em><strong>democracy</strong> </em>will retrieve both <em>democracy</em> and <em>Democracy</em>. In order to make a search case-sensitive, click 'Options-&gt;Case sensitive'.

{{< verticalspacer 20 >}}
<h5 id="wild">Wildcards</h5>
The <strong>*</strong> symbol may be used to represent any string of characters of any length. For example, searching <strong><i>test*</i></strong> will retrieve a concordance containing all words which start with <i>test</i> (e.g. <i>test, tests, testament, testability, etc</i>):

<img class="alignnone wp-image-3706 size-full" src="/wp-content/uploads/2018/04/test_2.png" alt="" width="1119" height="619" />

{{< verticalspacer 20 >}}
<h5 id="seq">Sequences</h5>
You can also specify sequences of keywords and/or wildcards, and the maximum number of intervening words you wish to allow between each element in the sequence.

For example, entering <em><strong>seen+before</strong></em> will return every instance in which these two words appear next to one another (and in this order):

<img class="alignnone wp-image-3650 size-full" src="/wp-content/uploads/2018/03/seenbefore_2-e1523387004226.png" alt="" width="644" height="502" />

{{< verticalspacer 20 >}}

Entering <strong><em>seen+[1]before</em></strong> finds, in addition, <em>...seen her before...</em>, <em>...seen him before...</em>, i.e., all sequences in which there is at most one word between 'seen' and 'before':

<img class="alignnone wp-image-3570 size-full" src="/wp-content/uploads/2018/03/seen1before-e1523386924539.png" alt="" width="691" height="324" />

{{< verticalspacer 20 >}}

Entering <em><strong>seen+[2]before</strong></em> finds, in addition, <em>...seen to fall before...</em>, and all sequences in which there is at most two words between 'seen' and 'before':

<img class="alignnone wp-image-3571 size-full" src="/wp-content/uploads/2018/03/seen2before-e1523386777314.png" alt="" width="679" height="441" />

{{< verticalspacer 20 >}}

Combinations of words and wildcards are also allowed in sequences, so entering <strong><em>know+before*</em></strong> will find <em>...know before...</em>, <em>...know beforehand...</em>, etc.

Using sequences to find exact combinations of keywords is possible and wildcards can be used to find patterns with an exact number of intervening words. However, these queries will take a long time to run.

An example query of <em><strong>good+man+*+bad</strong></em> finds the concordance shown below.

<img class="alignnone wp-image-3649 size-full" src="/wp-content/uploads/2018/03/complexq_2-e1523386855351.png" alt="" width="642" height="107" />

{{< verticalspacer 20 >}}
<h5 id="regex">Regular expressions</h5>
Finally, searching using 'regular expressions' allows you to select any string that matches a specified element of regular language. Regular expressions need to be enclosed in double quotation symbols (e.g.<strong><i> "regex"</i></strong>). A selection of example 'regex' searches are shown below:
<ol>
 	<li><em><strong>"(man|men)"</strong></em> retrieves a concordance of lines containing EITHER <em>man</em> OR <em>men </em>(i.e. the vertical bar is used to separate alternatives; the set of alternatives must be placed within parentheses);</li>
 	<li><em><strong>democracy+"(is|as|means)" </strong></em>retrieves a concordance of sequences containing <em>democracy </em>AND EITHER <em>is</em> OR <em>as</em> OR <em>means</em>;</li>
 	<li><em><strong>"labou?r"</strong></em> retrieves a concordance of <em>labour</em> AND <em>labor</em> (i.e. the question mark is used to indicate that the 'u' in this search string is optional);</li>
 	<li><em><strong>"citizens?(hip)?"</strong></em> finds instances of <em>citizen, </em>optionally followed by an 's' AND optionally followed by 'hip' (i.e. the parentheses group the characters in 'hip' together as a suffix that can be treated as optional. This regex can thus be used to generate a concordance of <em>citizen</em> AND <em>citizens</em> AND <em>citizenship</em>);</li>
 	<li><em><strong>"pl..."</strong></em> retrieves a concordance of all five-letter words beginning with 'pl' contained in the corpus (i.e. the full stop is used here to indicate any single character, not including white space).</li>
 	<li><em><strong>"dem.{2,7}"</strong></em> returns a concordance of all words starting with 'dem' followed by a minimum of two characters and a maximum of seven characters (i.e. the curly braces {} are used in combination with the full stop to indicate a minimum and maximum number of characters {min,max}).</li>
</ol>
A brief guide to regular expression syntax is also available <a href="http://www.regular-expressions.info/">here</a>.

{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="sort">Sort</h3>
&nbsp;

Searched concordances can be sorted at a position relative to the keyword. Select the position using the dropdown menus for either the right or left context, and click the corresponding sort button to reorganise the concordance list. The words at the sorted position will be highlighted in red.
<p style="line-height: 24.3224315643311px;">By clicking 'Sort by Filename', the concordance lines can also be grouped according to the different texts from which they have been extracted.</p>
<img class="alignnone wp-image-3710 size-full" src="/wp-content/uploads/2018/04/Sort_3.png" alt="" width="1119" height="501" />

{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="extract">Extract</h3>
&nbsp;

Clicking on a concordance line and then pressing the 'Extract' button will bring up a window containing an expanded context for that concordance line, as shown below:

<img class="alignnone wp-image-3716 size-full" src="/wp-content/uploads/2018/04/extract_2.png" alt="" width="1121" height="647" />

{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="meta">Metadata</h3>
&nbsp;

Clicking on a concordance line and then pressing the 'Metadata' button will bring up a window containing metadata for the file which contains that concordance line, as shown below:

<img class="alignnone wp-image-3717 size-full" src="/wp-content/uploads/2018/04/metadata.png" alt="" width="1121" height="847" />

{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="delete">Delete Line</h3>
&nbsp;

Selecting a concordance line and then clicking on the 'Delete Line' button will remove this line from the concordance. You can also select and delete a block of consecutive lines. This can be a useful feature if you wish to declutter the display in order to focus in on a particular collocation or set of collocations.

Running the same search again will bring any deleted lines back into the concordance displayed.

<img class="alignnone wp-image-3718 size-full" src="/wp-content/uploads/2018/04/Delete_line_2.png" alt="" width="1122" height="812" />

{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="sel">Subcorpus Selection</h3>
&nbsp;

The subcorpus selection tool allows you to restrict the results of concordance queries and the contents of frequency tables to files matching certain criteria. These criteria can be, for example, the subcorpus (e.g. Internet or Modern subcorpus) to which they belong, their publication date, the author, the translator, etc..

In order to select a subcorpus, choose 'Options-&gt;Select subcorpus...'

A window similar to the one shown below should appear:

<img class="alignnone wp-image-3682 size-full" src="/wp-content/uploads/2018/04/subcorpus_2.png" alt="" width="1144" height="674" />

{{< verticalspacer 20 >}}

The menu boxes allow you to select one or more parameters for texts to be included in or excluded from the desired subcorpus. In order to select more than one item (e.g. a range of dates) within a single menu box, hold the CTRL key on your keyboard (CMD on Apple computers) as you click on each.

Criteria in multiple menu boxes can also be connected so as to form the logical expressions which ultimately determine what gets included or excluded. You can, for example, choose a subcorpus of translations from French published after 1990 by selecting each of these criteria within the interface:

<img class="alignnone size-full wp-image-3685" src="/wp-content/uploads/2018/04/Subcoprus-example.png" alt="" width="1216" height="685" />

{{< verticalspacer 20 >}}

By default, selecting an item in the menu boxes will include files that meet this criterion in the subcorpus; in order to exclude certain texts from your subcorpus selection, select the relevant criterion and tick the 'Exclude' checkbox below this menu.

For example, if you want to run a search on only the translated texts contained in the corpus (i.e. no original writings), you should select 'Translation' within the 'Translation status' menu box. This will include only those texts that have been tagged as translations in their metadata within your subcorpus selection. If, on the other hand, you want to run a search on non-translated works only, you should instead select 'Translation' within the 'Translation status' menu box and tick the 'Exclude' checkbox below this menu.

Clicking 'Apply’ and then ‘OK' activates the subcorpus selection. In order to de-activate it (that is, allow a search on the full corpus or another subcorpus), choose 'Options' and de-select 'Activate subcorpus'.

Sometimes the information in the metadata will not be sufficient to define the required subcorpus. In this case, building the subcorpus manually by selecting the required filenames individually and saving the output as a textual query for reuse at a later time is recommended.

For example, you might be interested in some but not all of the translations produced of Thucydides History of the Peloponnesian War: e.g. Henry Dale's (mod000098), Charles Smith's (mod000016)  and Stephen Lattimore's (mod000048), but not Benjamin Jowett's (mod000019) or Richard Crawley's (mod000020). In this case, it might be easiest to select the appropriate filenames and save this query for later use:
<p style="padding-left: 30px;"><span style="color: #808080;">($s/../document/@filename='mod000098' or $s/../document/@filename='mod000016' or $s/../document/@filename='mod000048')</span></p>
To reuse a textual query such as this, simply tick the 'Use Textual Query?' checkbox and paste into the Textual Query box at the bottom of the Subcorpus Selection window.

<img class="alignnone wp-image-3683 size-full" src="/wp-content/uploads/2018/04/Textualquery.png" alt="" width="1144" height="674" />

{{< verticalspacer 20 >}}

&nbsp;

<hr />

<h4></h4>
<h3 id="opt">Options and Preferences</h3>
&nbsp;

The preferences panel can be opened by selecting the menu option 'Options-&gt;Preferences...'.

The following window should appear:

<img class="size-full wp-image-3576 alignnone" src="/wp-content/uploads/2018/03/preferences.jpg" alt="" width="399" height="294" />

{{< verticalspacer 20 >}}
<ul>
 	<li><strong>Concordance context</strong> changes the number of characters displayed to the left and right of the keyword.</li>
 	<li><strong>File extract</strong> <strong>context </strong>changes the number of characters displayed in the 'Extract' window.</li>
 	<li><strong>Font Size</strong> changes the font size in the browser, extract and metadata windows.</li>
</ul>
{{< verticalspacer 20 >}}

<hr />

<h4></h4>
<h3 id="plug">Plugins</h3>
&nbsp;

Several plugins have been developed to enhance corpus analysis. These plugins are mature prototypes and as such are under continued development:

<img class="wp-image-3707 size-full alignnone" src="/wp-content/uploads/2018/04/Plugins-menu.png" alt="" width="386" height="211" />

{{< verticalspacer 20 >}}
<h5 id="fl">Frequency List</h5>
Select 'Plugins-&gt;Word Frequency List'. The following window will appear:

<img class="size-full wp-image-3577 alignnone" src="/wp-content/uploads/2018/03/fqbrowsernotes.png" alt="" width="1187" height="888" />

{{< verticalspacer 20 >}}

Select the range of ranked items to display (the default is to display the 500 most common terms) and click on 'Get List' to retrieve their frequency table. This table can be saved to a CSV file which you can manipulate through spreadsheet software or other external tools.

This list can also be sorted alphabetically or numerically by frequency within the window by clicking on the headers 'Type' and 'Frequency' respectively.

<strong>Note:</strong> as shown above, set 0 as the print option to retrieve the entire frequency list.

{{< verticalspacer 20 >}}
<h5 id="corpbrowser">Corpus Description Browser</h5>
By selecting 'Plugins-&gt;Corpus Description Browser', a window will appear which contains a list of each file in the corpus or subcorpus selection. Also displayed is the metadata associated with these files, the number of tokens they contain and their type-token ratios.

At the bottom of the window you will see the total number of tokens in the corpus (or subcorpus selection) and the overall type-token ratio.

<img class="size-full wp-image-3578 alignnone" src="/wp-content/uploads/2018/03/corpbrowser-1.png" alt="" width="800" height="667" />

{{< verticalspacer 20 >}}
<h5 id="mosaic">Mosaic Visualization</h5>
Unlike the Frequency List and Corpus Description Browser, the Mosaic and the Concordance Tree plugins generate positional word statistics based on a concordance you have already generated.

Within the Mosaic plugin, four modes of operation are available:
<p style="padding-left: 60px;"><strong>[A] Frequency Mosaic</strong></p>
This view shows word frequency at positions to the left and right of a keyword. Each box (tile) represents a different word at each position. The height of each box is directly proportional to its frequency.

For the example, in the Mosaic shown below the keyword <strong><i>muscles</i> </strong>was searched. Looking at the visualisation it should be clear that:
<ul>
 	<li><i>'of'</i> is the most frequent word one position to the right of <strong><em>muscles</em></strong></li>
 	<li><i>'of'</i> is approximately four times more frequent than the second most frequent word ('<i>that'</i>) in this same position relative to the keyword <strong><i>muscles</i></strong>.</li>
 	<li>The word<i> 'the'</i> occurs more frequently one position to the left of <strong><i>muscles</i></strong> than in any other word-position relative to this keyword.</li>
</ul>
<img class="alignnone wp-image-3579 size-full" src="/wp-content/uploads/2018/03/mos1-e1522851267697.png" alt="" width="823" height="489" />

{{< verticalspacer 20 >}}
<p style="padding-left: 60px;"><strong>[B] Frequency Mosaic (No Stopwords)</strong></p>
This mode simply removes words which occur with a frequency above a certain threshold. It thus aims to help the researcher by omitting very common 'stopwords' such as 'the', 'of', 'and', etc.

The figure below shows the second Mosaic mode for the keyword <i><strong>muscles</strong></i>:

<img class="size-full wp-image-3580 alignnone" src="/wp-content/uploads/2018/03/mos2.png" alt="" width="923" height="500" />

{{< verticalspacer 20 >}}
<p style="padding-left: 60px;"><strong>[C] Collocation Strength (Global)</strong></p>
With this third view, the user has the option to scale the height of the word boxes according to one of four ‘collocation strength’ statistics: <strong>MI-score, MI3-score, Log-Log </strong>and<strong> Z-score</strong>. This version of the Mosaic can thus help the researcher find out whether an observed collocation pattern is statistically meaningful or whether two words simply co-occur by chance.

All of these statistics compare in different ways the <strong>observed frequency</strong> of a term co-occurring with the node word, against its <strong>expected frequency</strong> in the corpus selected. The <strong>observed frequency</strong> corresponds to the actual number of instances in which these two words co-occur. The <strong>expected frequency</strong> is the frequency that one would expect if no factor other than random chance were affecting the frequencies. It is therefore calculated as the total word count of the corpus selected divided by the number of individual ‘types’ (the total number of <em>different</em> words).

Which of these scores is most helpful will ultimately depend on the user’s research questions and interests. MI-scores will tend to show more lexically unique collocations, while the other three statistics will tend to emphasise high frequency items. More information on the relative benefits and disadvantages of each of these measures can be found in the literature on using statistics in corpus linguistics: see, for example, <strong>Tony McEnery, Richard Xiao &amp; Yukio Tono (2006) <em>Corpus-based Language Studies: An advanced resource book</em>, London &amp; New York: Routledge</strong>.
<p style="padding-left: 60px;"><strong>MI-Score</strong>: This statistical measure is widely used in corpus linguistics in order to test the significance of a collocation. It is calculated by dividing the observed frequency of the co-occurring word by its expected frequency in the corpus selected, and then taking the logarithm to the base 2 of the result. The higher the MI-score (and, consequently, the greater the height of the word box), the stronger the significance of the collocation.</p>
<p style="padding-left: 60px;"><strong>MI3-Score</strong>: MI-scores can be shown to place excessive emphasis on especially rare words, to the detriment of more common terms. The MI3-score is therefore an attempt to re-balance this bias in the MI-score test by giving more weight to high frequency items. It is calculated by cubing the observed frequency, dividing this by its expected frequency in the corpus selected, and then taking the logarithm to the base 2 of the result. Again, the higher the MI3-score (and, consequently, the greater the height of the word box), the stronger the significance of the collocation.</p>
<p style="padding-left: 60px;"><strong>Log-Log</strong>: Log-log is another extension of the MI-score test developed in order to address the perceived biases of this calculation by giving more weight to high frequency items. It is calculated by multiplying the MI-score by the log of the number of co-occurrences of the two words, and again the higher the Log-Log score (and, consequently, the greater the height of the word box), the stronger the significance of the collocation.</p>
<p style="padding-left: 60px;"><strong>Z-Score</strong>: Finally, Z-scores represent a further means of comparing the observed frequency of a collocate with the frequency expected if only chance were affecting its distribution in the corpus selected. In this case, they are calculated as the number of standard deviations from the mean frequency. As with the other measures, the higher the Z-score (and, consequently, the greater the height of the word box), the stronger the significance of the collocation.</p>
Hovering over a tile with the mouse pointer will display the statistical values according to which its height has been calculated (see screenshot below). Please note, however, that <strong>the figures shown for the</strong> <strong>MI- and MI3-scores are not log transformed</strong> because log transformation would have the effect of smoothing over the differences between the relative frequencies of the collocates, rather than foregrounding them. In order to convert these values into ‘true’ MI- and MI3-scores, users should take the log to the base 2 of the figure displayed. For instance, in the example pasted below, we need to take the log to the base 2 of 77627.4 = 16.24428. Online calculators such as OmniCalculator can help users make this conversion: <a href="https://www.omnicalculator.com/math/log">https://www.omnicalculator.com/math/log</a>

<img class="alignleft wp-image-4725 size-full" src="/wp-content/uploads/2018/12/Mosaic_collocation_strength_1-e1545147108172.png" alt="" width="897" height="485" />

<strong>Example</strong>

To illustrate the usefulness of this version of the Mosaic with an example, the screenshot below shows the ‘Column Frequency’ Mosaic for collocations of the node word ‘citizenship’ in a subcorpus of English translations of Thucydides. This shows that the words ‘of’, ‘rights’, and ’the’ co-occur most frequently in the word positions to the left of ‘citizenship’:

<img class="alignleft size-full wp-image-4726" src="/wp-content/uploads/2018/12/Mosaic_collocation_strength_2.png" alt="" width="892" height="492" />

Switching to the ‘collocation strength’ view in its MI-score version gives quite a different picture (see below). As discussed, this measure only shows those collocates that can be shown to co-occur with significantly greater frequency than expected if chance alone were at play. The MI-score does, however, tend to give particular weight to terms which appear only very rarely in the corpus as a whole and highlight them as particularly strong collocates of the node word. Hence, the Greek name ‘Sadokos’ is displayed as a ‘strong’ collocate for ‘citizenship’ in this corpus, four word-positions to its right (MI = 18.37092). This is because it only appears twice in the corpus as a whole, and in one of these instances with citizenship:

<img class="alignleft size-full wp-image-4727" src="/wp-content/uploads/2018/12/Mosaic_collocation_strength_3.png" alt="" width="904" height="510" />

Switching to the MI3-score version brings other – potentially more interesting – collocations into the picture, namely, ‘rights’ and ‘privileges’, terms which are used with greater frequency in the corpus selected as a whole (72 and 42 times respectively). ‘Rights’ and ‘privileges’ are calculated as having relatively high MI3-scores (16.24427 and 14.85657 respectively), so the Mosaic would suggest these are statistically significant collocations for ‘citizenship’ in this corpus and that this pattern is worth investigating in further detail:

<img class="alignleft size-full wp-image-4723" src="/wp-content/uploads/2018/12/Mosaic_collocation_strength_4.png" alt="" width="902" height="515" />

{{< verticalspacer 20 >}}
<p style="padding-left: 60px;"><strong>[D] Collocation Strength (Local)</strong></p>
In this last view the collocation strength boxes are scaled up so that each column is full height. This distorts the values so that comparisons across word positions are now invalid. However, this improves the researcher’s ability to inspect the word positions individually and view collocation patterns which would have been too difficult to identify in the global view. In the example pasted below, for instance, we might find this view useful for the way it points to ‘Athenian’ and ‘Spartan’ as potentially interesting collocates, one word-position to the left of ‘citizenship’:

<img class="alignleft size-full wp-image-4724" src="/wp-content/uploads/2018/12/Mosaic_collocation_strength_5.png" alt="" width="898" height="510" />

&nbsp;

{{< verticalspacer 20 >}}
<p style="padding-left: 60px;"><strong id="interactions">[E] Mosaic Interactions</strong></p>
The Mosaic and the concordance window are linked and interactions with the Mosaic are mirrored in the concordance window. Clicking on a tile in the Mosaic sorts the appropriate column in the concordance window and scrolls to the clicked word where it appears in that position.

All concordance lines containing the clicked word in the relevant position are highlighted in purple. In addition, the clicked word is also highlighted in the concordance where it occurs in positions other than the one selected in the Mosaic. This allows users to capture occurrences of a given collocation, such as ‘good’ + ‘citizen’, within an expanded collocation span, as can be seen in the following screenshot.

<img class="alignnone size-full wp-image-3875" src="/wp-content/uploads/2018/05/mosaic_interaction_3.png" alt="" width="996" height="737" />

{{< verticalspacer 20 >}}

Hovering over tiles in the mosaic pops up a tool-tip which displays the word and its collocation frequency in this word-position. In addition the tool-tip also displays the calculated collocation strength statistic when using either of the Collocation Strength views.

Mousing over tiles which are too small to read expands them and a number of tiles around the target.

Right clicking on a context word will attempt to search for concordances of the keyword and the clicked word at the chosen position. Warning: These searches may take a long time to finish.

If you find a tile marked <strong>*null*</strong>, this simply means that no collocations can be found at this word-position. This is most commonly because the keyword occurs at the very beginning or end of a corpus text.

{{< verticalspacer 20 >}}
<h5 id="tree">Concordance Tree</h5>
The Concordance Tree builds a tree of either the left or right context of the concordance. The tree is rooted at the keyword and expands outwards, allocating a separate column to each word position. Thus, unlike the Mosaic visualisation, the Concordance Tree maintains the sentence structure within each line, albeit only on one side of the search term at a time.

You can use the scroll function on your mouse to zoom in and out, and click and drag using the hand tool to move the tree around the screen. Clicking on a word expands/collapses the branch of the tree associated with that word.

<img class="size-full wp-image-3584 alignnone" src="/wp-content/uploads/2018/03/tree.png" alt="" width="843" height="712" />

{{< verticalspacer 20 >}}

<hr />

<h3></h3>
<h3 id="greek">Using the Greek corpus</h3>
&nbsp;

In order to search <a href="http://genealogiesofknowledge.net/corpora/greek-corpus/">the Greek corpus</a>, you must enter your query in the Greek script. The browser does not recognise transliterated Greek. Thus, searching for <em><strong>anqrwpos</strong></em> (as one might when using e.g. the <a href="http://www.perseus.tufts.edu/hopper/">Perseus Digital Library </a>or the <a href="http://stephanus.tlg.uci.edu/">Thesaurus Linguae Graecae</a>) will not return any results. You must instead enter <em><strong>ανθρωπος</strong> </em>in order to obtain the desired results.

As with the search query tools implemented by the Perseus Digital Library and the Thesaurus Linguae Graecae, however, the Genealogies of Knowledge software is not by default sensitive to diacritical marks: searching for <em><strong>α</strong><strong>νθρωπος </strong></em>will, in other words, find instances of <em><strong>ἄνθρωπος</strong></em>. In order to have the software distinguish between accented and unaccented letters, please go to 'Options' &gt; 'Case/diacritic sensitive'.

{{< verticalspacer 20 >}}

<hr />

&nbsp;
<h3 id="arabic">Using the Arabic corpus</h3>
&nbsp;

As with the Greek corpus, the Arabic corpus must be searched using the Arabic script and not any transliterated form.
<h5><strong>Typing in Search Box (Mac OS Platforms)</strong></h5>
Typing Arabic in the search box is straightforward in the case of platforms other than Mac OS. Apple users may find that Arabic letters will display unconnected and in reverse order. While somewhat distracting, this will not affect the generation or display of concordances.
<h5><strong>Affixes</strong></h5>
If you type a lexical item without affixes the search will return all permutations of the item, including affixes, except for conjugation affixes (i.e. those signalling gender, person and tense). So, a search for <strong>دل</strong> will return
<p style="padding-left: 60px;"><strong>وقال</strong></p>
<p style="padding-left: 60px;"><strong>فقال</strong></p>
<p style="padding-left: 60px;"><strong>قاله</strong></p>
But it will not return
<p style="padding-left: 60px;"><strong>قالت</strong></p>
<p style="padding-left: 60px;"><strong>قالوا</strong></p>
<p style="padding-left: 60px;"><strong>تقول</strong></p>
<p style="padding-left: 60px;"><strong>يقال</strong></p>
If you type a form with a specific affix, the search will return only that form, except for conjunctions (such as <strong>و</strong> and <strong>ف</strong>). So if you type <strong>قالت</strong>, the search will not return <strong>قالوا </strong>or <strong>يقال</strong>, but it will return:
<p style="padding-left: 60px;"><strong>قالت</strong></p>
<p style="padding-left: 60px;"><strong>فقالت</strong></p>
<p style="padding-left: 60px;"><strong>وقالت</strong></p>
<strong>Note:</strong> no tokeniser is perfect, and all languages have polysemous items. You should therefore expect some search items to be misinterpreted by the software. For example, a search for the verb <strong>دل</strong> will return both <strong>ودل</strong> (conjunction <strong>و</strong> plus verb <strong>دل</strong>) as well as the noun <strong>بدل</strong>, misinterpreted by the tokeniser as preposition <strong>ب</strong>  + noun/verb <strong>دل</strong>).
<h5>Wildcards</h5>
As with the subcorpora in other languages, the asterisk (<strong>*</strong>) may be used to represent any string of characters of any length, either at the beginning or end of an item. For example, searching for <strong>*</strong><strong>قال</strong>  will retrieve a concordance containing all words starting with that form:
<p style="padding-left: 60px;"> <strong>قال</strong></p>
<p style="padding-left: 60px;"><strong>قالت</strong></p>
<p style="padding-left: 60px;"><strong>قالوا</strong></p>
<p style="padding-left: 60px;"><strong>قالوه</strong></p>
For users of Mac OS, the<strong> *</strong> should be typed <strong>at the beginning</strong> not end of the search word, which, as explained earlier, will appear as disjointed letters in reverse order. Similarly, to retrieve a concordance of all items ending in <strong>قال</strong><em>, </em>Apple users should place the <strong>* </strong><strong>at the end</strong> not the beginning of the search word.
<h5><strong>Frequency List and Other Plug-ins</strong></h5>
The output of the frequency list plug-in and other tools such as Mosaic is based on the same principles of tokenisation outlined above. Hence, the number of concordance lines returned for a search item is its corpus count and should be the same as the figure that appears against it in the frequency list.

<hr />

&nbsp;</div>