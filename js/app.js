
// ジャンケンゲーム
let win = 0;
let lose = 0;
let shizuku = "original";
let timerId = null;

initZyankenBackground();

function getHandEmoji(hand) {
    switch (hand) {
        case 1:
            return "✊";
        case 2:
            return "✌️";
        case 3:
            return "✋";
    }
}

function initZyankenBackground()
{
    $("#gu").css("background-color", "#eeeeee");
    $("#choki").css("background-color", "#eeeeee");
    $("#pa").css("background-color", "#eeeeee");

    $("#gu").css("border-color", "#cccccc");
    $("#choki").css("border-color", "#cccccc");
    $("#pa").css("border-color", "#cccccc");
}

function zyanken()
{
    var shizukuHand = Math.floor(Math.random() * 3 + 1);
    var yourHand = Math.floor(Math.random() * 3 + 1);

    $("#cpu").html(getHandEmoji(shizukuHand));
    initZyankenBackground();

    switch (yourHand) {
        case 1:
            $("#gu").css("background-color", "blue");
            break;
        case 2:
            $("#choki").css("background-color", "blue");
            break;
        case 3:
            $("#pa").css("background-color", "blue");
            break;
    }

    if(shizukuHand == yourHand)
    {
        $("#result").html("あいこ😟");
        $("#shizuku").attr("src","images/" + shizuku + "/draw-200.png");
    }
    else if((shizukuHand == 1 && yourHand == 2)
         || (shizukuHand == 2 && yourHand == 3)
         || (shizukuHand == 3 && yourHand == 1))
    {
        lose++;
        $("#result").html("負け😭");
        $("#shizuku").attr("src","images/" + shizuku + "/win-200.png");
    }
    else
    {
        win++;
        $("#result").html("勝ち👑");
        $("#shizuku").attr("src","images/" + shizuku + "/lose-200.png");
    }

    $("#score").html(win + "勝" + lose + "敗");
}

$("#start").on('click', function()
{
    if(timerId == null)
    {
        timerId = setInterval(zyanken, 100);
        $("#start").html("ストップ");
        initZyankenBackground();
    }
    else
    {
        clearInterval(timerId);
        timerId = null;
        $("#start").html("スタート");        
    }    
});

$("#gu").on('click', function(){
    var random = Math.floor(Math.random() * 3 + 1);
 
    if(random == 1)
    {
        $("#cpu").html("✊");
        $("#result").html("あいこ😟");
        $("#shizuku").attr("src","images/" + shizuku + "/draw-200.png");
    }
    else if(random == 2)
    {
        lose++;
        $("#cpu").html("✌️");
        $("#result").html("負け😭");
        $("#shizuku").attr("src","images/" + shizuku + "/win-200.png");
    }
    else if(random == 3)
    {
        win++
        $("#cpu").html("✋");
        $("#result").html("勝ち👑");
        $("#shizuku").attr("src","images/" + shizuku + "/lose-200.png");
    }

    $("#score").html(win + "勝" + lose + "敗");
});

$("#choki").on('click', function(){
    var random = Math.floor(Math.random() * 3 + 1);
 
    if(random == 1)
    {
        win++
        $("#cpu").html("✊");
        $("#result").html("勝ち👑");
        $("#shizuku").attr("src","images/" + shizuku + "/lose-200.png");
    }
    else if(random == 2)
    {
        $("#cpu").html("✌️");
        $("#result").html("あいこ😟");
        $("#shizuku").attr("src","images/" + shizuku + "/draw-200.png");
    }
    else if(random == 3)
    {
        lose++;
        $("#cpu").html("✋");
        $("#result").html("負け😭");
        $("#shizuku").attr("src","images/" + shizuku + "/win-200.png");
    }

    $("#score").html(win + "勝" + lose + "敗");
});

$("#pa").on('click', function(){
    var random = Math.floor(Math.random() * 3 + 1);
 
    if(random == 1)
    {
        lose++;
        $("#cpu").html("✊");
        $("#result").html("負け😭");
        $("#shizuku").attr("src","images/" + shizuku + "/win-200.png");
    }
    else if(random == 2)
    {
        win++
        $("#cpu").html("✌️");
        $("#result").html("勝ち👑");
        $("#shizuku").attr("src","images/" + shizuku + "/lose-200.png");
    }
    else if(random == 3)
    {
        $("#cpu").html("✋");
        $("#result").html("あいこ😟");
        $("#shizuku").attr("src","images/" + shizuku + "/draw-200.png");
    }

    $("#score").html(win + "勝" + lose + "敗");
});

$("#original").on('click', function(){
    shizuku = "original";
    $("#result").html("　　　　");
    $("#cpu").html("😊");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
})

$("#idol").on('click', function(){
    shizuku = "idol";
    $("#result").html("　　　　");
    $("#cpu").html("😊");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
});

$("#miko").on('click', function(){
    shizuku = "miko";
    $("#result").html("　　　　");
    $("#cpu").html("😊");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
});

$("#haregi").on('click', function(){
    shizuku = "haregi";
    $("#result").html("　　　　");
    $("#cpu").html("😊");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
});

$("#komachi").on('click', function(){
    shizuku = "komachi";
    $("#result").html("　　　　");
    $("#cpu").html("😊");
    $("#shizuku").attr("src","images/" + shizuku + "/normal-200.png");
});