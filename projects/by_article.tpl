{% extends "full.tpl" %}

{%- block html_head -%}
    <meta charset="UTF-8">
    <meta name="description" content="Ben Yip | Projects">
    <meta name="author" content="Ben Yip">
    <meta name="keywords" content="Ben, Benjamin, Yip, yipben, benyip, data scientist, Analytics, data, science, resume, North Carolina, statistics, Economics, Arabic">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="apple-touch-icon" sizes="180x180" href="../images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../images/favicons/favicon-16x16.png">
    <link rel="manifest" href="../images/favicons/manifest.json">
    <link rel="mask-icon" href="../images/favicons/safari-pinned-tab.svg" color="#86a979">
    <link rel="shortcut icon" href="../images/favicons/favicon.ico">
    <meta name="msapplication-config" content="../images/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">   

    {{ super() }}
{%- endblock html_head -%}

{% block body %}
    <header>
        <div class="web top">
            Benjamin Yip
            <img src="../images/flower_stem.png">
        </div>

       <div class="mobile top">
            B. Yip 
            <img src="../images/flower_stem.png">
        </div>

        <nav class="web nav">
            <ul>
                <li><a href="../index.html">About</a></li>
                <li><a href="../resume.html">Resume</a></li>
                <li><a href="../projects.html" class="current">Projects</a></li>
            </ul>
        </nav>

        <nav class="mobile nav">
            <ul>
                <li><a href="index.html">A</a></li>
                <li><a href="resume.html">R</a></li>
                <li><a href="projects.html" class="current">P</a></li>
            </ul>
        </nav>
    </header>

    {{ super() }}

    <span class="bottom-nav">
        <a href="../projects.html"><span class="black-text">Projects</span></a> | <a href=""><span class="black-text">Top</span></a>
    </span>
    

    <footer class="web footer">
        <div class="foot-block" id="foot-block-left">
                © 2019 Benjamin Yip
        </div>

        <div class="foot-block">
            <a href="https://github.com/yipben" target="_blank"> 
                <!-- <img src="images/icons/github.png" alt="Github Icon"> -->
                <img src="../images/icons/github-brands.svg" alt="Github Icon">
            </a>
            <a href="https://www.linkedin.com/in/yipben/" target="_blank"> 
                <!-- <img src="images/icons/In-2C-81px-R.png" alt="LinkedIn Icon"> -->
                <img src="../images/icons/linkedin-in-brands.svg" alt="LinkedIn Icon">
            </a>
        </div>

        <div class="foot-block" id="foot-block-right">
            <img src="../images/logo.svg" alt="ben yip's logo">
        </div>
    </footer>

    <footer class="mobile footer">
        <div class="foot-block" id="foot-block-left">
            © 2019 <b>B.Y.</b>
        </div>

        <div class="foot-block">
            <a href="https://github.com/yipben" target="_blank"> 
                <img src="../images/icons/github-brands.svg" alt="Github Icon">
            </a>
            <a href="https://www.linkedin.com/in/yipben/" target="_blank"> 
                <img src="../images/icons/linkedin-in-brands.svg" alt="LinkedIn Icon">
            </a>
        </div>

        <div class="foot-block" id="foot-block-right">
            <img src="../images/logo.svg" alt="ben yip's logo">
        </div>
    </footer>      

{% endblock %}

