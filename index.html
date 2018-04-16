<?php
include_once("/home/webmaster/www/lacne/top/include/setup.php");
include_once($Configure->read($APP_ID.'.LACNE_SHAREDATA_DIR')."/include/output/post.php");

// =================================================================================================================================
// イベント予定 最新5件取得
// =================================================================================================================================
$params = array(
	'num'      => 3,
	'postmeta' => true,
);
$search_param = array(
	'post.convene_date >=' => date("Y-m-d", mktime(0, 0, 0, date("m"), date("d")-1, date("Y"))),
);
$sql_order = array(
	'key' => 'post.convene_date',
	'by'  => 'DESC',
);
//データを取得する
$event_data = $Output->LACNE_PostList($params, $search_param, $sql_order, 'event');

// 曜日配列
$day = $Output->LACNE->Configure->read('top.day');

$output_event = array();
if ( !empty($event_data) ) {
	foreach ( $event_data as $event ) {
		$output_event[] = '<li>';
		$output_event[] = '<span>'.date('Y.m.d', strtotime($event['convene_date'])).'</span>';
		$output_event[] = $Output->the_category_icon($event['category'], 'event');
		
		//改行処理
		$title = $event['title'];
		$titleArr=explode('[br]',$title);
		$retitle = "";
		if(count($titleArr)>1){
			for ($i = 0; $i <= count($titleArr) - 2; $i++){
				//$retitle = $retitle.$titleArr[$i]."<br>";
				$retitle = $retitle.$titleArr[$i];
			}
			$retitle = $retitle.$titleArr[$i];
		}else{
			$retitle = $title;
		}
		$title = $retitle;
		
        if($event['LinkTalent'] == 1)
        {
		    $output_event[] = '<a href="./TalentPalette/event-seminar.php?id='.$event['id'].'" target="_blank">'.$title.'</a>';
        }
        else
        {
		    $output_event[] = '<a href="/corporate/event/reserve.php?id='.$event['id'].'" target="_blank">'.$title.'</a>';
        }
		$output_event[] = '</li>';
	}
} else {
	$output_event[] = '<li>イベント・セミナー予定はありません。</li>';
}

// =================================================================================================================================
// イベントレポート 最新1件取得
// =================================================================================================================================
$params = array(
	'num' => 1,
	'postmeta' => true,
);
if (empty($event_data) || count($event_data) == 1) {
	$params = array(
		'num' => 2,
		'postmeta' => true,
	);
}
//データを取得する
$report_data = $Output->LACNE_PostList($params, array(), array(), 'report');

$output_report = array();
if ( !empty($report_data) ) {
	foreach ( $report_data as $report ) {
		$output_report[] = '<li>';
        $output_report[] = '<img src="/images/index/main_txt_report.gif" height="25" width="214" alt="イベント&amp;セミナー Report" class="img-responsive">';
		$output_report[] = '<a href="/corporate/event/detail.php?id='.$report['id'].'" target="_blank">';
		$lead = $report['_meta_']['lead'];
		if ( mb_strlen($lead, STRINGCODE_OUTPUT) >= 60 ) {
			$lead = mb_substr($lead, 0, 59, STRINGCODE_OUTPUT).'…';
		}
		$output_report[] = $lead;
        // いったん画像表示なし
        //if ( !empty($report['_meta_']['img1']) ) {
        //    $output_report[] = '<p><img src="'.$report['_meta_']['img1'].'" height="92" width="118" alt=""></p>';
        //}
		$output_report[] = '</a>';
		$output_report[] = '</li>';
	}
}

// =================================================================================================================================
// お知らせ 最新一覧取得
// =================================================================================================================================
$params = array(
	'num'      => 20,
	'postmeta' => true,
);
//データを取得する
$news_data = $Output->LACNE_PostList($params, array(), array(), 'news');

$output_news = array();
// お知らせ
if ( !empty($news_data) ) {
	$output_news[] = '';
    $cnt = 1;
	foreach ( $news_data as $news ) {
    if ($cnt > 10) { break; }
    if (strpos($news['link'], "blogMieruka")) { continue; }
		$news['title'] = str_replace(array(' ', '　'), '', $news['title']);
		$output_news[] = '<li>';
		$output_news[] = '<span>'.date('Y.m.d', strtotime($news['output_date'])).'</span>';
		$output_news[] = $Output->the_category_icon($news['category'], 'news');
		
		//改行処理
		$title = $news['title'];
		$titleArr=explode('[br]',$title);
		$retitle = "";
		if(count($titleArr)>1){
			for ($i = 0; $i <= count($titleArr) - 2; $i++){
				//$retitle = $retitle.$titleArr[$i]."<br>";
				$retitle = $retitle.$titleArr[$i];
			}
			$retitle = $retitle.$titleArr[$i];
		}else{
			$retitle = $title;
		}
		$title = $retitle;
		
		//一定文字以降…追加
		$title = mb_strimwidth($title, 0, 130, "...");
		
		if ( !empty($news['link']) ) 
        {
			if ( !empty($news['link_window']) ) 
            {
				$output_news[] = '<a href="'.$news['link'].'" target="_blank">'.$title.'</a>';
			} 
            else 
            {
				$output_news[] = '<a href="'.$news['link'].'" target="_blank">'.$news['title'].'</a>';
			}
		} 
        else if ( !empty($news['_meta_']['file1']) ) 
        {
			$output_news[] = '<a href="'.$news['_meta_']['file1'].'" target="_blank">'.$title.'</a>';
		} 
        else 
        {
			if($news['LinkTalent'] == 1 && $news['LinkMieruka'] == 1&& $news['LinkCR'] == 1)
			{
                $output_news[] = '<a href="/corporate/information/detail.php?id='.$news['id'].'" target="_blank" >'.$title.'</a>';
			}
            else if($news['LinkTalent'] == 1)
            {
                $output_news[] = '<a href="./TalentPalette/information.php?id='.$news['id'].'" target="_blank" >'.$title.'</a>';
            }
            else
            {
                $output_news[] = '<a href="/corporate/information/detail.php?id='.$news['id'].'" target="_blank" >'.$title.'</a>';
            }
		}
		$output_news[] = '</li>';
        $cnt++;
	}
	$output_news[] = '<p style="height:18px;" ></p>';
} else {
	$output_news[] = '<li>お知らせはありません。</li>';
}


// =================================================================================================================================
// 見える化総研
// =================================================================================================================================
// 年
$year = date('Y') + 1;
if ( isset($_GET['y']) && !empty($_GET['y']) && is_numeric($_GET['y']) && intval($year) >= intval($_GET['y']) ) {
	$year = $_GET['y'];
}
// カテゴリ
$category = '';
if ( isset($_GET['c']) && !empty($_GET['c']) && is_numeric($_GET['c']) ) {
	$category = $_GET['c'];
}

$params_news = array(
	'page_limit' => 7,
	'postmeta'   => true,
);
$search_param_news = array(
);
// 年
if ( !empty($year) ) {
	$params_news['date_target'] = $year;
}
//デフォルト
if($year == date('Y') + 1){
	$params_news['date_target'] = "";
}

// カテゴリ
if ( !empty($category) ) {
	$params_news['category'] = $category;
}

//ソート
$sql_order = array("key"=>"output_date","by"=>"DESC","val"=>"sort_date");

//データを取得する
$mieruka_data = $Output->LACNE_PostList($params_news, array(), $sql_order, 'textminingLab');

// takase add
// 取得条件
$params_blogRings = array(
	'page_limit' => 7,
	'postmeta'   => true,
);

//データを取得する
$bigdata_blogRings = $Output->LACNE_PostList($params_blogRings, array(), array(), 'blogRings');

//マージテスト
$news_data = array_merge($mieruka_data, $bigdata_blogRings);

foreach ($news_data as $key => $data)
{
    $SortKey[$key] = $data['output_date'];
}
array_multisort($SortKey, SORT_DESC, $news_data);


if ( !empty($news_data) ) {
	// 一覧
    $cnt = 1;
	foreach ($news_data as $news) {
    if ($cnt > 7){ break; }
		$output_lab[] = '<li>';
        $output_lab[] = '<span>'.date('Y.m.d', strtotime($news['output_date'])).'</span>';
        if($news['category'] == 0){
            $output_lab[] = '<img src="./corporate/Library/images/main_ico_text.gif" height="20" width="70" alt="若手研究員の日記">';
            $output_lab[] = '<a href="/corporate/souken/bigdata.php?id='.$news['id'].'" target="_blank">';
        }else if($news['category'] == 1){
            $output_lab[] = '<img src="./corporate/Library/images/main_ico_lab.gif" height="20" width="70" alt="テキストマイニング講座">';
            $output_lab[] = '<a href="/corporate/souken/mierutrend.php?id='.$news['id'].'" target="_blank">';
        }else if($news['category'] == 2){
            $output_lab[] = '<img src="./corporate/Library/images/main_ico_twt.gif" height="20" width="70" alt="みんなのつぶやき">';
            $output_lab[] = '<a href="/mieruka/blog/blogMieruka.php?id='.$news['id'].'" target="_blank">';
        }else if($news['category'] == 3){
            $output_lab[] = '<img src="./corporate/Library/images/main_ico_malab.png" height="20" width="70" alt="MALab">';
            $output_lab[] = '<a href="/cr/blog/article.php?id='.$news['id'].'" target="_blank">';
        }

		//改行入れる
		$title = $news['title'];
		$titleArr=explode('[br]',$title);
		$retitle = "";
		if(count($titleArr)>1){
			for ($i = 0; $i <= count($titleArr) - 2; $i++){
				$retitle = $retitle.$titleArr[$i]."<br>";
			}
			$retitle = $retitle.$titleArr[$i];
		}else{
			$retitle = $title;
		}
		$output_lab[] = $retitle;
		$output_lab[] = '</a>';
		$output_lab[] = '</li>';
        $cnt++;
	}   
} else {
	$output_lab[] = '<li>該当するお知らせはありません。</li>';
}
?>

<!DOCTYPE html>
<html lang="ja" xmlns:og="http://ogp.me/ns#" xmlns:mixi="http://mixi-platform.com/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="プラスアルファ・コンサルティングは「見える化エンジン」提供をはじめ、テキストマイニング技術（アンケート分析・収集、コールログ分析、ブログ分析・収集、クチコミ分析）を核に世の中のあらゆるテキスト情報を『見える化』するソリューションカンパニーです。">
    <meta name="keywords" content="テキストマイニング,アンケート分析,コールログ分析,ブログ分析・収集,クチコミ分析,twitter,ソーシャルメディア,プラスアルファ・コンサルティング,見える化エンジン,カスタマーリングス,マーケティングオートメーション,CRM,アルファスコープ,+PLANET,FAQサービス,ナレッジマネジメント,タレントマネジメント,タレントパレット">
    <title>テキストマイニング・ビッグデータ解析のプロフェッショナル集団｜プラスアルファ・コンサルティング</title>
    <link rel="alternate" media="handheld" href="http://www.pa-consul.co.jp/" />
	<link rel="stylesheet" media="screen" href="/corporate/Library/css/corporate.css">
	
    <?php virtual('./corporate/Library/head.php'); ?>
</head>
<body id="CorporateTop">
    <?php virtual('./corporate/Library/inc/header.php'); ?>

    <section id="FirstViewImage">
        <div id="Corporate" ></div>
        <div id="MierukaEngine" style="display:none;"></div>
        <div id="CustomerRings" style="display:none;"></div>
        <div id="AlphaScope" style="display:none;"></div>
        <div id="TalentPalette" style="display:none;"></div>
        <img class="img-responsive" src="./corporate/Library/images/10th_Anniversary-mini.png" alt="10th_Anniversary">
    </section>

    <section id="Solution">
        <h2 class="Message"><strong>私たちが提供する見える化ソリューション</strong></h2>
        <ul class="list-inline">
            <li id="mieruka" class="Trigger">
                <a href="./mieruka/">
                    <div class="mieruka"><h1>テキストマイニング</h1></div>
                    <img src="./mieruka/images/common/ttl_logo.png" alt="テキストマイニングツール｜見える化エンジンロゴ" style="max-width:250px;width:100%;" class="img-responsive">
                    <img src="./corporate/Library/images/mierukaimage.png" alt="見える化エンジン画面イメージ" class="mieruka SolutionImage img-responsive">
                    <p class="mieruka">製品ページ<span class="glyphicon glyphicon-chevron-right"></span></p>
                </a>
            </li>
            <li id="cr" class="Trigger">
                <a href="./cr/">
                    <div class="cr"><h1>マーケティングオートメーション</h1></div>
                    <img src="./corporate/Library/images/CustomerRings-logo1-yoko.png" width="203" alt="マーケティングオートメーションツール｜カスタマーリングスロゴ" class="img-responsive">
                    <img src="./corporate/Library/images/crimage.png" alt="カスタマーリングス画面イメージ" class="cr SolutionImage img-responsive">
                    <p class="cr">製品ページ<span class="glyphicon glyphicon-chevron-right"></span></p>
                </a>
            </li>
            <li id="as" class="Trigger">
                <a href="./alphascope/">
                    <div class="as"><h1>FAQナレッジシステム</h1></div>
                    <img src="./corporate/Library/images/aslogo.png" alt="FAQナレッジシステム｜アルファスコープロゴ" class="img-responsive">
                    <img src="./corporate/Library/images/asimage.png" alt="アルファスコープ画面イメージ" class="as SolutionImage img-responsive">
                    <p class="as">製品ページ<span class="glyphicon glyphicon-chevron-right"></span></p>
                </a>
            </li>
            <li id="talent" class="Trigger">
                <a href="./TalentPalette/">
                    <div class="talent"><h1>タレントマネジメント</h1></div>
                    <img src="./corporate/Library/images/talentlogo.png" alt="タレントマネジメント｜タレントパレットロゴ" class="img-responsive">
                    <img src="./corporate/Library/images/talentimage.png" alt="タレントパレット画面イメージ" class="talent SolutionImage img-responsive">
                    <p class="talent">製品ページ<span class="glyphicon glyphicon-chevron-right"></span></p>
                </a>
            </li>
        </ul>
    </section>

    <section id="Adopters">
        <h2 class="AdopterszHead"><strong>2000社以上の企業が選んだ<br/>ビッグデータ×見える化の専門集団</strong></h2>
        <ul class="list-inline">
            <li><img class="img-responsive" src="./corporate/Library/images/logo/asahi-logo.png" alt="アサヒ"></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/everlile-logo.png" alt="エバーライフ"></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/fo-logo.png" alt="FO・インターナショナル"></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/kirin-logo.png" alt="キリン"></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/kddi-logo.png" alt="KDDI" style="width:80%;"></li>
        </ul>
        <ul class="list-inline">
            <li><img class="img-responsive" src="./corporate/Library/images/logo/coop-logo.png" alt="コープ"></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/kokuyo-logo.png" alt="KOKUYO" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/GDO-logo.png" alt="GDO" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/cybozu-logo.png" alt="サイボウズ" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/suntory-logo.png" alt="サントリー" ></li>
        </ul>
        <ul class="list-inline">
            <li><img class="img-responsive" src="./corporate/Library/images/logo/gmo-logo.png" alt="GMOクラウド" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/jvc-logo.png" alt="JVCケン" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/shiseido-logo.png" alt="資生堂" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/JupiterShop-logo.png" alt="ジュピターショップチャンネル" ></li>
            <li><img class="img-responsive" src="./mieruka/case/images/top/biofermin.png" alt="ビオフェルミン" ></li>
        </ul>
        <ul class="list-inline">
            <li><img class="img-responsive" src="./corporate/Library/images/logo/toto-logo.png" alt="TOTO" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/jal-logo.png" alt="日本航空" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/nestle-logo.png" alt="ネスレ" style="width:100%;"></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/hankyu-logo.png" alt="阪急阪神第一ホテルグループ" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/bandai-logo.png" alt="BANDAI" style="width:50%;"></li>
        </ul>
        <ul class="list-inline">
            <li><img class="img-responsive" src="./corporate/Library/images/logo/familymart-logo.png" alt="ファミリーマート" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/fujitsuten-logo.png" alt="富士通テン" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/mixi_logo.png" alt="mixi" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/mizuno-logo.png" alt="ミズノ" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/mitsubishi-logo.png" alt="三菱UFJニコス" ></li>
        </ul>
        <ul class="list-inline">
            <li><img class="img-responsive" src="./corporate/Library/images/logo/yahoo-logo.png" alt="ヤフー" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/euglena-logo.png" alt="ユーグレナ" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/runkup-logo.png" alt="ランクアップ" style="width:50%;"></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/rohto-logo.png" alt="ロート製薬" ></li>
            <li><img class="img-responsive" src="./corporate/Library/images/logo/wacoal-logo.png" alt="ワコール" ></li>
        </ul>
    </section>

    <section id="infomation">
        <div class="innerSection">
            <section class="inline">
                <section class="info pull-left">
                    <div class="listtitle">
                        <span class="title">お知らせ</span><a href="./corporate/information/" class="morebutton" target="_blank">MORE</a>
                    </div>
                    <ul class="list-inline">
                        <?=implode("\n", $output_news)?>
                    </ul>
                </section>
                <section class="event pull-right">
                    <div class="listtitle">
                        <span class="title">イベント</span><a href="./corporate/event/" class="morebutton" target="_blank">MORE</a>
                    </div>
                    <ul class="list-inline">
                    <?=implode("\n", $output_event)?>
                    <?=implode("\n", $output_report)?>
                    </ul>
                </section>
                <section class="lab pull-right">
                    <div class="listtitle">
                        <span class="title">コラム</span>
                    </div>
                    <ul class="list-inline">
                    <?=implode("\n", $output_lab)?>
                    </ul>
                </section>
            </section>
        </div>
    </section>

    <?php virtual('./corporate/Library/inc/footer.php'); ?> 
    <?php virtual('./corporate/Library/bodyend.php'); ?>
</body>
</html>