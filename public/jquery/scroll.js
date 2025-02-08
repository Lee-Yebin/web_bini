$(function () {
    let ww = $(window).width();
    function mob() { return ww <= 768; }

    let s1leftWidth = mob() ? ww : $(".mb_desc .top .text").width() + ww * 0;
    let s1scrub01 = 2.5;

    // main_banner의 텍스트 애니메이션
    let s1chars = $(
        // 상단 텍스트와 텍스트 박스
        ".main_banner .mb_desc .top .text, " +
        ".main_banner .mb_desc .top .txt_box, " +
        // 하단 텍스트와 텍스트 박스
        ".main_banner .mb_desc .bottom .text, " +
        ".main_banner .mb_desc .bottom .txt_box"
    );


    // 하나의 ScrollTrigger로 애니메이션 동기화
    gsap.to(s1chars, {
        x: function (i, target) {
            // 방향 설정: 위쪽 텍스트는 왼쪽(-), 아래쪽 텍스트는 오른쪽(+)
            return $(target).closest(".top").length ? -s1leftWidth : s1leftWidth;
        },
        opacity: 1,
        scrollTrigger: {
            trigger: ".main_banner",
            start: "top top",   // 모든 애니메이션의 시작 지점
            end: "bottom top", // 모든 애니메이션의 종료 지점
            scrub: s1scrub01,
            pin: true,
            pinType: 'fixed',
            pinSpacing: false,
        },
    });

    // main_appeal 스크롤

    // sub_logo 도형 서서히 커지게 
    gsap.to(".main_appeal .sub_logo em", {
        x: 0, // 모든 동그라미가 x축으로 중앙으로 이동
        y: 0, // 중앙으로 세로 이동
        scale: 5, // 크기가 커짐
        backgroundColor: "#e3efff", // 배경 색상
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".main_appeal",
            start: "top top", // 스크롤 시작 위치
            end: "bottom top", // 스크롤 끝 위치
            pin: ".main_appeal",
            scrub: s1scrub01,
        }
    });;

    // 텍스트 아래에서 위로 이동
    // 텍스트 애니메이션 (위로 올라가며 사라짐)

    // .tit 텍스트가 먼저 나오고, 사라진 후 .txt.next가 하나씩 나오고 사라지도록 설정
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".main_appeal", // .main_appeal을 기준으로 설정
            start: "top top", // 시작 위치
            end: "bottom top", // 끝 위치
            scrub: true, // 스크롤에 따라 애니메이션이 진행
        }
    });

    // .tit 텍스트 애니메이션 (처음에 나타나고, 사라짐)
    tl.fromTo(".main_appeal .tit", {
        opacity: 0, // 처음에 보이지 않도록 설정
        y: 0, // 아래에서 시작
    }, {
        opacity: 1, // 완전히 보이도록 설정
        y: 0, // 원위치로 이동
        duration: 1,
        ease: "power1.inOut"
    }).to(".main_appeal .tit", {
        y: 0, // 텍스트를 위로 이동
        opacity: 0, // 사라지도록 설정
        duration: 1,
        ease: "power1.inOut"
    });

    // .txt.next 텍스트들이 하나씩 나타나고 사라지도록 애니메이션 추가
    gsap.utils.toArray(".main_appeal .txt.next").forEach((txt, index) => {
        tl.fromTo(txt, {
            opacity: 0, // 처음에 보이지 않도록 설정
            y: 0, // 아래에서 시작
        }, {
            opacity: 1, // 나타나도록 설정
            y: 0, // 원위치로 이동
            duration: 1,
            ease: "power1.inOut"
        }).to(txt, {
            y: 0, // 텍스트를 위로 이동
            opacity: 1, // 사라지도록 설정
            duration: 1,
            ease: "power1.inOut"
        }, "-=0.8"); // 각 텍스트가 순차적으로 사라지도록 약간 겹치게 설정
    });

});
