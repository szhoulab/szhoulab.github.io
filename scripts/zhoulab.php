<?php

function visitor_counter():int{
    static $cache=null;
    if($cache!==null){
        return $cache;
    }
    $fp=fopen("index.visitor_counter.txt","c+b");
    flock($fp,LOCK_EX);
    $cache=(int)stream_get_contents($fp);
    ++$cache;
    rewind($fp);
    fwrite($fp,(string)$cache);
    flock($fp,LOCK_UN);
    fclose($fp);
    return $cache;
}

//echo "<p>Copyright &copy; 1999-" . date("Y") . " W3Schools.com</p>";