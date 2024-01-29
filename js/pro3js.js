// html과 css가 로딩되면 자바스크립트 코드 실행
$(document).ready(function(){

    // html 객체를 자바스크립트 변수로 선언
    const audio = document.getElementById("audio");
    const playlist = document.getElementById("playlist");
    const viewer = document.querySelector(".viewer img");

    start();
    
    // 플레이리스트 항목을 클릭할 때 음원을 재생합니다.
    playlist.addEventListener("click", (e) => {
        // 클릭한 대상이 <li>태그 인지 확인
        if (e.target.tagName === "LI") {

            // 리스트 태그에 작성된 오디오 정보와 이미지 정보를 변수에 저장
            const audioSrc = e.target.getAttribute("data-audio");
            const imageSrc = e.target.getAttribute("data-image");
            const pText = e.target.querySelector("p").textContent;
            
            //플레이어에  오디오 경로 전달
            audio.src = audioSrc;
            // 뷰어에  이미지 경로 전달
            viewer.src = imageSrc;
            // h1 태그에 제목 전달 
            $("#m_title").text(pText);
            
            start();
            
            // li태그 css 속성 제어
            e.target.style.backgroundColor = "rgba(225, 245, 5, 0.5)";
            e.target.style.color = "black";
            
            // 클릭한 객체에서 .bt_con_box태그에 있는 첫번째 이미지를 숨김다.
            $(e.target).find(".bt_con_box img").eq(1).hide();
            $(e.target).find(".bt_con_box img").eq(0).show();


            // 플레이어 재생 실행
            audio.play();
        }
    });

    function start(){        
        // .bt_con_box반복적으로 찾아 다니면서 명령을 준다.
        $(".bt_con_box").each(function() {
            // 해당 객체의 이미지 태그중에 0번째 이미지를 숨긴다.
            $(this).find("img").eq(0).hide();            
            $(this).find("img").eq(1).show();
        });

        $("#playlist li").css({
            "background-color": "",
            "color":"white",
        });       
    }
    
});