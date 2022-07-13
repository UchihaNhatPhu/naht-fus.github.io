endpoint = `https://docs-api.nguyenhaidang.ml`
message_list = [{
    icon: 'fa-solid fa-star-exclamation',
    title: 'Trang web bắt đầu hoạt động',
    timing: '1655701877368'
}];

item_list = [
    {
        name: 'Facebook',
        icon: 'fa-brands fa-facebook',
        item: [{
            "url": endpoint + '/finduid?url=https://www.facebook.com/NHD.JRT.262/',
            "name": "Find UID"
        },
        {
            "event": 'Sắp có',
            "url": endpoint + '/info?id=100033478361032',
            "name": "Get Info"
        },
        {
            "url": endpoint + '/downloadfb?url=https://www.facebook.com/watch?v=587760489446657',
            "name": "Tải video từ Facebook"
        }
        ]
    },
    {
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        item: [{
                "url": endpoint + "/tiktok?url=https://vm.tiktok.com/ZMLMbkp82",
                "name": "TikTok Downloader"
            },
            {
                "url": endpoint + "/tiktok?search=son tung",
                "name": "TikTok Search"
            },
            {
                "url": endpoint + "/tiktok?username=ltkh2004",
                "name": "TikTok Info User"
            }
        ]
    },
    {
        name: 'Tạo avatar anime',
        icon: 'fa-solid fa-user-tie',
        item: [{
                "url": endpoint + "/taoanhdep/list",
                "name": "Danh sách nhân vật"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=name&name=nobita",
                "name": "Tìm kiếm nhân vật theo tên"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=id&id=30",
                "name": "Tìm kiếm nhân vật theo ID"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=movie&movie=Conan",
                "name": "Tìm kiếm nhân vật theo tên phim"
            },
            {
                "url": endpoint + "/taoanhdep/avatarwibu?id=1&chu_nen=Nguyễn Hải Đăng&chu_ky=J-JRT",
                "name": "Tạo avatar"
            }
        ]
    },
    {
        name: 'Code',
        icon: 'fa-solid fa-code',
        item: [{
                "url": 'https://deobfuscate.nguyenhaidang.ml/',
                "name": "Deobfuscate"
            },
            {
                "url": 'https://obfuscator.io/',
                "name": "Obfuscate"
            }
        ]
    },
    {
        name: 'Canvas',
        icon: 'fa-solid fa-diagram-lean-canvas',
        item: [{
                "url": endpoint + "/blink?id=100033478361032,100022113516016&delay=500",
                "name": "Blink"
            },
            {
                "url": endpoint + "/fbcover/v1?name=Nguyễn Hải Đăng&color=no&address=VietNam&email=dangz123456789z@gmail.com&subname=J-JRT&sdt=0396049649&uid=100033478361032",
                "name": "Facebook Cover v1"
            },
            {
                "url": endpoint + "/fbcover/v2?name=Nguyễn Hải Đăng&color=no&subname=J-JRT&id=100",
                "name": "Facebook Cover v2"
            },
            {
                "url": endpoint + "/fbcover/v3?name=Nguyễn Hải Đăng&birthday=26/02/2003&love=Hà Nhung&location=VietNam&hometown=VietNam&follow=15000000&gender=Nam&uid=100033478361032",
                "name": "Facebook Cover v3"
            },
            {
                "url": endpoint + "/tiki?text=Nguyễn Hải Đăng",
                "name": "Đi cùng Tiki"
            },
            {
                "url": endpoint + "/thuphap?id=1&sodong=1&dong_1=Nguyễn Hải Đăng",
                "name": "Chữ Thư Pháp"
            },
            {
                "url": endpoint + "/giangsinh?text=Hải Đăng",
                "name": "Giáng Sinh"
            },
            {
                "url": endpoint + "/shopmaihuong?text1=Nguyễn Hải Đăng&text2=0396049649",
                "name": "Shop Mike Hường"
            }
        ]
    },
    {
        name: 'SoundCloud',
        icon: 'fa-brands fa-soundcloud',
        item: [{
                "url": endpoint + '/soundcloud?search=son tung',
                "name": "SoundCloud Search"
            },
            {
                "url": endpoint + '/soundcloud?url=https://soundcloud.com/sontungmtp-music/ch-ng-ta-c-a-hi-n-t-i',
                "name": "SoundCloud Downloader"
            }
        ]
    },
    {
        name: 'Email',
        icon: 'fa-solid fa-envelope',
        item: [{
                "url": endpoint + '/mail10p/domain',
                "name": "List Domain"
            },
            {
                "url": endpoint + '/mail10p/get?email=emall@domain&apikey=',
                "name": "Get Email"
            },
            {
                "url": endpoint + '/mail10p/check?id_mail=id_mail&apikey=',
                "name": "Check Email"
            }   
        ]
    },
    {
        name: 'Youtube',
        icon: 'fa-brands fa-youtube',
        item: [{
                "url": endpoint + '/youtube?search=son tung',
                "name": "Youtube Search"
            },
            {
                "url": endpoint + '/youtube?GetVideoId=https://www.youtube.com/watch?v=Jk38OqdAQxc',
                "name": "Get Video Id"
            },
            {
                "url": endpoint + '/youtube?GetVideoDetails=xypzmu5mMPY',
                "name": "Get Video Details"
            },
            {
                "event": 'Some Error',
                "url": endpoint + '/youtube?downloadVideo=Jk38OqdAQxc',
                "name": "Youtube Downloader"
            }
        ]
    },
    {
        name: 'Short Url',
        icon: 'fa-solid fa-curling-stone',
        item: [{
            "url": endpoint + '/slink?url=https://www.youtube.com/watch?v=Jk38OqdAQxc',
            "name": "Short Url"
        }]
    },
    {
        name: 'Pinterest',
        icon: 'fa-brands fa-pinterest',
        item: [{
            "url": endpoint + '/pinterest?search=mirai',
            "name": "Search"
        }]
    },
    {
        name: 'Random Images',
        icon: 'fa-solid fa-images',
        item: [{
                "event": 'NSFW',
                "url": endpoint + '/images/ausand',
                "name": "Ausand"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/du',
                "name": "NSFW 1"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/girl',
                "name": "NSFW 2"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/mong',
                "name": "NSFW 3"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/anime',
                "name": "Anime"
            }
        ]
    },
    {
        name: 'Simsimi',
        icon: 'fa-solid fa-message-bot',
        item: [{
                "url": endpoint + '/sim?type=ask&ask=sim ơi',
                "name": "Ask"
            },
            {
                "url": endpoint + '/sim?type=teach&ask=sim ơi&ans=ơii',
                "name": "Teach"
            }
        ]
    },
    {
        name: 'Games',
        icon: 'fa-solid fa-gamepad',
        item: [{
                "url": endpoint + '/game/dovui',
                "name": "Đố vui"
            },
            {
                "url": endpoint + '/game/dovuiv2',
                "name": "Đố vui 2"
            },
            {
                "url": endpoint + '/game/dhbcv1',
                "name": "Đuổi hình bắt chữ"
            },
            {
                "url": endpoint + '/game/dhbcv1',
                "name": "Đuổi hình bắt chữ 2"
            },
            {
                "url": endpoint + '/game/linkword?word=ngu ngốc',
                "name": "Nối từ"
            },
            {
                "url": endpoint + '/game/taixiu',
                "name": "Tài xỉu"
            },
            {
                "url": endpoint + '/game/v2/taixiu',
                "name": "Tài xỉu 2"
            },
            {
                "url": endpoint + '/game/vuatiengviet',
                "name": "Vua tiếng Việt"
            },
            {
                "url": endpoint + '/vuatiengviet/image?word=ngu ngốc',
                "name": "Vua tiếng Việt 2"
            }
        ]
    },
    {
        name: 'Tiện ích',
        icon: 'fa-solid fa-lamp-street',
        item: [{
                "url": endpoint + '/imgur?link=https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
                "name": "Imgur Upload"
            },
            {
                "url": endpoint + '/random/useragent',
                "name": "Random User-Agent"
            },
            {
                "url": endpoint + '/covid?country=viet%20nam',
                "name": "COVID 19 DATA"
            }
        ]
    },
    {
        name: 'Liên hệ Admin',
        icon: 'fas fa-user-headset',
        item: [{
            event: 'DO NOT SPAM',
            url: 'https://www.facebook.com/PhamVanDien.User/',
            name: 'Facebook'
        }]
    }
];
