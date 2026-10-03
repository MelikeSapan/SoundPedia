// Sanatçılar (Ekrandaki sıra ve tür tanımlarıyla)
const artists = [
    {
        id: "duman",
        name: "Duman",
        genre: "YERLİ ROCK",
        image: "images/duman.jpg"
    },
    {
        id: "sezen-aksu",
        name: "Sezen Aksu",
        genre: "TÜRKÇE POP",
        image: "images/aksu.jpg"
    },
    {
        id: "mor-ve-otesi",
        name: "Mor ve Ötesi",
        genre: "YERLİ ALTERNATİF ROCK",
        image: "images/morveotesi.jpg"
    },
    {
        id: "manifest",
        name: "Manifest",
        genre: "TÜRKÇE POP",
        image: "images/manifest.jpg"
    },
    {
        id: "gokhan-turkmen",
        name: "Gökhan Türkmen",
        genre: "TÜRKÇE POP",
        image: "images/gokhan.jpg"
    },
    {
        id: "athena",
        name: "Athena",
        genre: "SKA PUNK / ROCK",
        image: "images/athena.jpg"
    },
    {
        id: "yildiz-tilbe",
        name: "Yıldız Tilbe",
        genre: "TÜRKÇE POP / FANTEZİ",
        image: "images/yıldız.jpg"
    },
    {
        id: "mabel-matiz",
        name: "Mabel Matiz",
        genre: "ALTERNATİF POP",
        image: "images/mabel.jpg"
    }
];

// Sanatçılara Ait Şarkılar ve Spotify Önizlemeleri
const songs = {
    duman: [
        { 
            title: "Kırmış Kalbini", 
            album: "Belki Alışman Lazım", 
            year: "2002", 
            spotifyId: "03FeHgtPLgBfBqKD3J3b4E" 
        },
        { 
            title: "Senden Daha Güzel", 
            album: "Duman II", 
            year: "2009", 
            spotifyId: "57lW6sFce8GYlLR9iaHDRM" 
        },
        { 
            title: "Aman Aman", 
            album: "Seni Kendime Sakladım", 
            year: "2005", 
            spotifyId: "0NeO8RLuVdFRigkKhjBgbT" 
        }
    ],
    "sezen-aksu": [
        { 
            title: "Firuze", 
            album: "Firuze", 
            year: "1982", 
            spotifyId: "7nSTtrEEmGtZ8BtG8Zc0ze" 
        },
        { 
            title: "Haydi Gel Benimle Ol", 
            album: "Sen Ağlama", 
            year: "1984", 
            spotifyId: "6ekUWsPDlyooDFSBmXvBIW" 
        },
        { 
            title: "Aşktan Ne Haber", 
            album: "Yaz Bitmeden", 
            year: "2003", 
            spotifyId: "5Ftku2ydxC3nkYHlkZU5Tx" 
        }
    ],
    "mor-ve-otesi": [
        { 
            title: "Bir Derdim Var", 
            album: "Dünya Yalan Söylüyor", 
            year: "2004", 
            spotifyId: "5UV2oqgMXvlkOvvtK3aT7f" 
        },
        { 
            title: "Cambaz", 
            album: "Dünya Yalan Söylüyor", 
            year: "2004", 
            spotifyId: "3ZkA3JnqluUWzwr64BBkl4" 
        },
        { 
            title: "Oyunbozan", 
            album: "Güneşi Beklerken", 
            year: "2006", 
            spotifyId: "5DbtYgRjkUIapSm2Ilr81D" 
        }
    ],
    manifest: [
        { 
            title: "Hileli", 
            album: "Hileli", 
            year: "2026", 
            spotifyId: "4eBE6hpwm7aJxIY4iwgwU8" 
        },
        { 
            title: "Toz Pembe", 
            album: "Toz Pembe", 
            year: "2026", 
            spotifyId: "24CSPGkF9QB1zW07dgtZhr" 
        },
        { 
            title: "Snap", 
            album: "Snap", 
            year: "2025", 
            spotifyId: "4EsRpVBBKiqOZ67DJj0QHF" 
        }
    ],
    "gokhan-turkmen": [
        { 
            title: "Büyük İnsan", 
            album: "Büyük İnsan", 
            year: "2008", 
            spotifyId: "01I156dG8jpLjjy97az6XK" 
        },
        { 
            title: "Bir Hayli", 
            album: "Bir Güzellik Yap", 
            year: "2012", 
            spotifyId: "400AjGhFGfVKEMSXf1AzPn" 
        },
        { 
            title: "Neyleyim İstanbulu", 
            album: "Bir Güzellik yap", 
            year: "2012", 
            spotifyId: "4tMqaNjQxHsWpYORQ7renT" 
        }
    ],
    athena: [
        { 
            title: "Ben Böyleyim", 
            album: "İt", 
            year: "2004", 
            spotifyId: "7aBKX9bD1PYtDsc8xdrcAA" 
        },
        { 
            title: "Skalonga", 
            album: "Holigan", 
            year: "1998", 
            spotifyId: "6TIqxLdKVLvtUXf5joBdr2" 
        },
        { 
            title: "Kafama Göre", 
            album: "Altüst", 
            year: "2014", 
            spotifyId: "3XOpY6WO7bMv87tf1DooG2" 
        }
    ],
    "yildiz-tilbe": [
        { 
            title: "Delikanlım", 
            album: "Delikanlım", 
            year: "1994", 
            spotifyId: "1iK9FikNjhLIf5I56KDUWI" 
        },
        { 
            title: "Çabuk Olalım Aşkım", 
            album: "Haberi Olsun", 
            year: "2002", 
            spotifyId: "6exCes4qpJpgPtOBXC0WEx" 
        },
        { 
            title: "Aşk Yok Olmaktır", 
            album: "Aşkperest", 
            year: "1996", 
            spotifyId: "0F7e5Ot8PrsdHBW0SmeXi7" 
        }
    ],
    "mabel-matiz": [
        { 
            title: "Antidepresan", 
            album: "Fatih", 
            year: "2022", 
            spotifyId: "4OH5Cd8ZOI1eSgJSC9PYmU" 
        },
        { 
            title: "Gel", 
            album: "Gök Nerede", 
            year: "2015", 
            spotifyId: "0OGpY82sToZSrrDgk4Iuic" 
        },
        { 
            title: "A Canım", 
            album: "Maya", 
            year: "2018", 
            spotifyId: "50SocgmOJdl1UPjOcFLSCm" 
        }
    ]
};

// Hayali Konser Verileri
const concertEvents = [
    {
        artistId: "duman",
        title: "Duman Açık Hava Konseri",
        date: "14 Kasım 2026",
        time: "21:00",
        location: "KüçükÇiftlik Park, İstanbul",
        price: "650 TL"
    },
    {
        artistId: "sezen-aksu",
        title: "Sezen Aksu Senfonik Gece",
        date: "28 Kasım 2026",
        time: "20:30",
        location: "Harbiye Cemil Topuzlu Açıkhava Tiyatrosu, İstanbul",
        price: "1200 TL"
    },
    {
        artistId: "mor-ve-otesi",
        title: "Mor ve Ötesi Stadyum Konseri",
        date: "05 Aralık 2026",
        time: "20:45",
        location: "Vodafone Park, İstanbul",
        price: "750 TL"
    },
    {
        artistId: "manifest",
        title: "Manifest Kulüp Turnesi",
        date: "12 Aralık 2026",
        time: "22:00",
        location: "Babylon Bomonti, İstanbul",
        price: "400 TL"
    },
    {
        artistId: "gokhan-turkmen",
        title: "Gökhan Türkmen Akustik",
        date: "19 Aralık 2026",
        time: "21:00",
        location: "MEB Şura Salonu, Ankara",
        price: "550 TL"
    },
    {
        artistId: "athena",
        title: "Athena Canlı & Yüksek Ses",
        date: "26 Aralık 2026",
        time: "21:30",
        location: "Bostancı Gösteri Merkezi, İstanbul",
        price: "600 TL"
    },
    {
        artistId: "yildiz-tilbe",
        title: "Yıldız Tilbe Efsane Şarkılar",
        date: "09 Ocak 2027",
        time: "21:00",
        location: "İzmir Kültürpark Açıkhava Tiyatrosu, İzmir",
        price: "700 TL"
    },
    {
        artistId: "mabel-matiz",
        title: "Mabel Matiz Fatih Turnesi",
        date: "16 Ocak 2027",
        time: "20:30",
        location: "Congresium, Ankara",
        price: "800 TL"
    }
];

// DOM Elemanları
const heroSection = document.getElementById("heroSection");
const artistsGrid = document.getElementById("artistsGrid");
const detailSection = document.getElementById("detailSection");
const selectedArtistBanner = document.getElementById("selectedArtistBanner");
const tracksContainer = document.getElementById("tracksContainer");
const backToHomeBtn = document.getElementById("backToHomeBtn");
const searchInput = document.getElementById("searchInput");

const homeLogo = document.getElementById("homeLogo");
const homeLink = document.getElementById("homeLink");
const eventsLink = document.getElementById("eventsLink");
const eventsSection = document.getElementById("eventsSection");
const eventsGrid = document.getElementById("eventsGrid");

const allSongsLink = document.getElementById("allSongsLink");
const allSongsSection = document.getElementById("allSongsSection");
const allSongsGrid = document.getElementById("allSongsGrid");

// Ana Sayfayı ve Sanatçıları Listeleme
function renderHomePage(e) {
    if (e) e.preventDefault();

    // Diğer tüm alt sayfaları gizle
    detailSection.style.display = "none";
    allSongsSection.style.display = "none";
    eventsSection.style.display = "none";

    // Ana sayfa bileşenlerini göster
    heroSection.style.display = "block";
    artistsGrid.style.display = "grid";

    const filterText = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const filteredArtists = artists.filter(artist =>
        artist.name.toLowerCase().includes(filterText) ||
        artist.genre.toLowerCase().includes(filterText)
    );

    artistsGrid.innerHTML = filteredArtists.map(artist => `
        <div class="artist-card" onclick="openArtistDetail('${artist.id}')">
            <img src="${artist.image}" alt="${artist.name}" class="artist-card-image">
            <div class="artist-card-info">
                <h3>${artist.name}</h3>
                <span>${artist.genre}</span>
            </div>
        </div>
    `).join("");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sanatçı Detay ve Şarkılarını Gösterme
function openArtistDetail(artistId) {
    const artist = artists.find(a => a.id === artistId);
    const artistSongs = songs[artistId] || [];

    heroSection.style.display = "none";
    artistsGrid.style.display = "none";
    allSongsSection.style.display = "none";
    eventsSection.style.display = "none";
    detailSection.style.display = "block";

    selectedArtistBanner.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}" class="banner-avatar">
        <div>
            <h2>${artist.name}</h2>
            <p style="color:#94a3b8; font-size:14px;">${artist.genre} &bull; ${artistSongs.length} Popüler Eser</p>
        </div>
    `;

    tracksContainer.innerHTML = artistSongs.map(song => `
        <div class="track-card">
            <h4>${song.title}</h4>
            <p>Albüm: ${song.album} &bull; ${song.year}</p>
            <div class="spotify-player-wrapper">
                <iframe 
                    style="border-radius:12px; border:none; margin-top:12px;" 
                    src="https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    `).join("");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Tüm Şarkıları Listeleme
function renderAllSongsPage(e) {
    if (e) e.preventDefault();

    heroSection.style.display = "none";
    artistsGrid.style.display = "none";
    detailSection.style.display = "none";
    eventsSection.style.display = "none";
    allSongsSection.style.display = "block";

    let combinedSongs = [];
    artists.forEach(artist => {
        const artistTrackList = songs[artist.id] || [];
        artistTrackList.forEach(track => {
            combinedSongs.push({
                ...track,
                artistName: artist.name
            });
        });
    });

    allSongsGrid.innerHTML = combinedSongs.map(song => `
        <div class="track-card">
            <h4>${song.title}</h4>
            <p style="color:#06b6d4; font-weight:600; margin-bottom:4px;">${song.artistName}</p>
            <p>Albüm: ${song.album} &bull; ${song.year}</p>
            <div class="spotify-player-wrapper">
                <iframe 
                    style="border-radius:12px; border:none; margin-top:12px;" 
                    src="https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    `).join("");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Etkinlikler Sayfası
function renderEventsPage(e) {
    if (e) e.preventDefault();

    heroSection.style.display = "none";
    artistsGrid.style.display = "none";
    detailSection.style.display = "none";
    allSongsSection.style.display = "none";
    eventsSection.style.display = "block";

    eventsGrid.innerHTML = concertEvents.map(event => {
        const artist = artists.find(a => a.id === event.artistId) || {};
        return `
            <div class="event-card">
                <img src="${artist.image || 'images/default.jpg'}" alt="${artist.name}" class="event-card-img">
                <div class="event-card-body">
                    <div>
                        <h3 class="event-artist-name">${artist.name}</h3>
                        <p style="color:#e2e8f0; font-weight:600; margin-bottom:10px;">${event.title}</p>
                        <div class="event-details">
                            <div>📅 Tarih: <strong>${event.date} - ${event.time}</strong></div>
                            <div>📍 Konum: <strong>${event.location}</strong></div>
                        </div>
                    </div>
                    <div>
                        <div class="event-price">Bilet: ${event.price}</div>
                        <button class="buy-ticket-btn" onclick="buyTicket('${artist.name}', '${event.location}', '${event.price}')">
                            Bilet Satın Al
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bilet Alma Bildirimi
function buyTicket(artistName, location, price) {
    alert(`🎉 Tebrikler!\n\n${artistName} konserine biletiniz ayrıldı.\nKonum: ${location}\nTutar: ${price}\n\nİyi eğlenceler dileriz!`);
}

// Arama Kutusu Dinleyicisi
if (searchInput) {
    searchInput.addEventListener("input", renderHomePage);
}

// Navigasyon Bağlantıları Dinleyicileri
if (homeLogo) homeLogo.addEventListener("click", renderHomePage);
if (homeLink) homeLink.addEventListener("click", renderHomePage);
if (backToHomeBtn) backToHomeBtn.addEventListener("click", renderHomePage);
if (allSongsLink) allSongsLink.addEventListener("click", renderAllSongsPage);
if (eventsLink) eventsLink.addEventListener("click", renderEventsPage);

// İlk Çalıştırma
renderHomePage();