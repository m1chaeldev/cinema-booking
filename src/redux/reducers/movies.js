import update from "immutability-helper";

const initialState = {
  data: [
    {
      name: "Đẳng cấp thú cưng 2",
      score: "9.3",
      duration: "90 phút",
      releaseDate: "07/06/2019",
      types: "2D, 3D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/dctc2.jpg"),
      isHovered: false,
      description: `Chó sục Max (Patton Oswalt) đang thích nghi với nhiều thay đổi lớn trong cuộc sống của Chú.
      Cô chủ của cậu nay đã kết hôn và có một cậu con trai, Liam. Max luôn lo lắng về việc bảo vệ cậu bé đến mức
      mắc chứng rối loạn âu lo. Trong chuyến đi chơi của gia đình về vùng nông trại, Max và chú chó lai Duke (Eric Stonestreet)
      chạm trán với đàn bò Không thân thiện, những chú cáo hơi thù địch và một chú gà tây đáng sợ. Việc này càng tăng nỗi sợ
      của Max. May mắn thay, Max nhận được chỉ dẫn của chú chó chăn gia súc kỳ cựu tên Rooster nhân vật đã thúc đẩy Max gạt bỏ
      sự lo lắng của mình, tìm ra bản năng mạnh mẽ tiềm ẩn bên trong,`
    },
    {
      name: "Chúa tể Godzilla",
      score: "8.3",
      duration: "130 phút",
      releaseDate: "31/05/2019",
      types: "2D, 3D",
      sub: "Phụ đề",
      age: "13",
      image: require("./../../views/images/movies/godzilla.jpg"),
      isHovered: false,
      description: `Chúa Tể Godzilla tập trung vào cuộc đụng độ các thành viên tổ chức Monarch với những quái thú khổng lồ - Rodan,
      Mothra, và King Ghidorah. Khi những quái vật huyền thoại trỗi dậy, chúng sẽ tranh giành quyền lực tối cao để thống trị thế
      giới. Do vậy, loài người sẽ phải đấu tranh để đem lại sự cân bằng trước những hiểm họa diệt vong đó.`
    },
    {
      name: "X-men: Phượng hoàng bóng tối",
      score: "8.4",
      duration: "115 phút",
      releaseDate: "07/06/2019",
      types: "2D, 3D",
      sub: "Phụ đề",
      age: "16",
      image: require("./../../views/images/movies/xmen.jpg"),
      isHovered: false,
      description: `X-Men: Dark Phoenix là phần mở rộng của vũ trụ X-Men khi Jean Grey thức tỉnh và lĩnh hội được Phoenix Force
      (Thế Lực Phượng Hoàng) - đại diện cho tổng năng lượng, sức mạnh của vạn thể đã và luôn tồn tại. Nguồn sức mạnh vô tận đem
      lại cho Jean Grey năng lực khủng khiếp nhưng mặt tối của sức mạnh cũng thức tỉnh theo. Liệu nhóm X-Men sẽ làm gì để ngăn
      chặn sự diệt vong của nhân loại do Jean Grey cùng Phoenix Force gây ra?`
    },
    {
      name: "Aladdin",
      score: "9.8",
      duration: "130 phút",
      releaseDate: "24/05/2019",
      types: "2D, 3D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/aladdin.jpg"),
      isHovered: false,
      description: `Aladdin 2019 là một phiên bản live action đầy màu sắc sống động và không kém phần hồi hộp, được chuyển thể
      từ bộ phim hoạt hình kinh điển cả hãng phim Disney. Câu chuyện xoay quanh chàng hoàng tử khu ổ chuột Aladdin – một thanh
      niên trẻ tuổi dũng cảm và nàng công chúa Jasmine mạnh mẽ, đương nhiên phải kể đến thần đèn Genie – người nắm giữ chìa
      khóa thay đổi tương lại sau này của họ.`
    },
    {
      name: "Doraemon: Nobita và mặt trăng phiêu lưu ký",
      score: "10.0",
      duration: "120 phút",
      releaseDate: "24/05/2019",
      types: "2D, 3D",
      sub: "Phụ đề, lòng tiếng",
      age: "0",
      image: require("./../../views/images/movies/doraemon.jpg"),
      isHovered: false,
      description: `Tớ tin chắc rằng có người sống trên mặt trăng. Tớ sẽ chứng minh điều đó!" Quyết tâm thực hiện bằng được kế
      hoạch sau khi hùng hồn tuyên bố với cả lớp, Nobita cầu cứu đến sự trợ giúp của Doraemon. Nhờ bảo bối "Huy hiệu câu lạc
      bộ Dị Thuyết", cả nhóm, có thêm sự có mặt của một cậu bạn mới chuyển trường, đã đặt chân đến một hành tinh hoàn toàn mới
      lạ và kì bí tại Mặt trăng… Nobita cùng các bạn bắt đầu chuyến phiêu lưu hướng tới hành tinh mà không biết rằng có một huyền
      thoại bí ẩn được cất giấu.`
    },
    {
      name: "Ngôi đền kì quái",
      score: "6.2",
      duration: "110 phút",
      releaseDate: "24/05/2019",
      types: "2D, 3D",
      sub: "Phụ đề",
      age: "18",
      image: require("./../../views/images/movies/ndmq.jpg"),
      isHovered: false,
      description: `Với tên gọi “Ngôi Đền Kỳ Quái”, Pee Nak là câu chuyện của một hội bạn thân khi tìm đến nơi được xem là đền
      thờ của truyền thuyết nàng Nak. Những tưởng sẽ “cầu được ước thấy” khi khám phá ngôi đền hoang sơ bí hiểm này thế nhưng
      hàng loạt tình huống “dở khóc dở cười” lại xảy đến với họ.`
    },
    {
      name: "Trùm, cớm và ác quỷ",
      score: "10.0",
      duration: "110 phút",
      releaseDate: "31/05/2019",
      types: "2D, 3D",
      sub: "Phụ đề",
      age: "18",
      image: require("./../../views/images/movies/tcvaq.jpg"),
      isHovered: false,
      description: `Sau hàng loạt bộ phim điện ảnh được ra rạp vào năm 2018, Ma Dong Seok đã chính thức trở lại với vai ông trùm
      trong dự án phim lần này. Đúng với tên gọi “Trùm, Cớm và Ác Quỷ”, Ma Dong Seok sẽ cùng hai diễn viên Kim Moo Yul và Kim
      Sung Gyu tạo ra một cuộc đi săn đầy tình tiết gây cấn và táo bạo. Lần này Ông Trùm không thể để danh dự bị ảnh hưởng sau
      cuộc tấn công bất ngờ của kẻ giết người hàng loạt, trùm xã hội đen Jang Dong-su quyết định bắt tay cùng cảnh sát Jung
      Tae-seok (KIM Moo-yeol) để truy lùng tên sát nhân và xử theo luật riêng của hắn.`
    },
  ],
  comingSoon: [
    {
      name: "Vua khủng long",
      score: "0.0",
      duration: "95 phút",
      releaseDate: "14/06/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/coming soon/vkl.jpg"),
      isHovered: false,
      description: `Junior là một khủng long bạo chúa Taborsaurus con nhưng vô cùng yếu ớt và nhút nhát. Dino - cha của Junior
      lại rất khắt khe và không hài lòng với con mình. Một ngày nọ, Junior bị bọn khủng long raptor bắt cóc. Dino trên hành
      trình đi tìm con đã kết bạn với những loài khủng long khác. Trong khi đó, Junior cũng có thêm bạn mới, bắt đầu trưởng
      thành hơn và chờ đợi cha mình. Đến lúc tưởng như sắp tìm thấy nhau, nguy hiểm đến từ vùng núi lửa lại ập đến và đe dọa
      cả hai cha con.`
    },
    {
      name: "Đặc vụ áo đen: sứ mệnh toàn cầu",
      score: "0.0",
      duration: "115 phút",
      releaseDate: "14/06/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "13",
      image: require("./../../views/images/movies/coming soon/mib.jpg"),
      isHovered: false,
      description: `Men in Black là loạt phim ăn khách trên toàn thế giới với tổng doanh thu 3 phần lên tới hơn 1,5 tỷ USD.
      Sau 4 năm vắng bóng màn ảnh rộng, thương hiệu sẽ trở lại với phần phim mới mang tên Men in Black: International
      (Đặc Vụ Áo Đen: Sứ Mệnh Toàn Cầu). Bộ phim hứa hẹn sẽ tiếp nối thành công của 3 phần đầu tiên và mở ra loạt phim mới vô
      cùng hấp dẫn.`
    },
    {
      name: "Rocketman",
      score: "0.0",
      duration: "115 phút",
      releaseDate: "14/06/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "18",
      image: require("./../../views/images/movies/coming soon/rocketman.jpg"),
      isHovered: false,
      description: `Bộ phim tiểu sử dựa trên cuộc đời của huyền thoại âm nhạc Elton John. Rocketman có sự tham gia của dàn diễn
      viên sáng giá như Jamie Bell, Richard Madden, Bryce Dallas Howard, và đặc biệt là sự góp mặt của anh chàng “điệp viên
      Kingsman” Taron Egerton trong vai tượng đài âm nhạc Elton John.`
    },
    {
      name: "Ký sinh trùng",
      score: "0.0",
      duration: "90 phút",
      releaseDate: "21/06/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/coming soon/kst.jpg"),
      isHovered: false,
      description: `Bộ phim xoay quanh hai gia đình hoàn toàn trái ngược: một bên vô cùng giàu có, còn một bên luôn sống trong
      cảnh nghèo túng. Họ tình cờ gặp gỡ và quen biết nhau sau một biến cố không ngờ.`
    },
    {
      name: "Boo! Hù!",
      score: "0.0",
      duration: "90 phút",
      releaseDate: "21/06/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/coming soon/hu.jpg"),
      isHovered: false,
      description: `BOO! (tựa Việt “HÙ!” ) là tác phẩm kinh dị, kỳ bí khai thác đề tài về lời nguyền cổ xưa. Bộ phim sẽ mang tới
      cho khán giả những giây phút căng thẳng, kịch tính khi một gia đình vướng phải một lời nguyền chết chóc, từ trò chơi khăm
      của một kẻ lạ mặt vào đêm Halloween.`
    },
    {
      name: "Câu chuyện đồ chơi 4",
      score: "0.0",
      duration: "90 phút",
      releaseDate: "21/06/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/coming soon/toy4.jpg"),
      isHovered: false,
      description: `Khi cô bé Bonnie mang tất cả đám đồ chơi đi du lịch cùng với gia đình mình, Woody đã vô tình hội ngộ với người
      bạn biệt tích lâu năm, Bo Peep – một búp bê đồ chơi có tinh thần thám hiểm. Khó khăn và hiểm nguy trong chuyến hành trình đã
      khiến Bo Peep tin rằng mình có thể có một cuộc sống phiêu lưu thú vị hơn là làm một món đồ chơi bằng sứ. Khi Woody và Bo Peep
      nhận ra họ là những món đồ chơi thuộc về hai thế giới khác nhau, họ đã sớm cảm nhận được những mối lo lắng của mình.`
    },
    {
      name: "Annabelle: Ác quỷ trở về",
      score: "0.0",
      duration: "90 phút",
      releaseDate: "26/06/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/coming soon/annabelle.jpg"),
      isHovered: false,
      description: `Sau thành công của phần tiền truyện Annabelle: Creation (2017) hé lộ cội nguồn đáng sợ của Annabelle,
      hãng Warner Bros. Tiếp tục khiến khán giả phải lạnh người với sự trỗi dậy của con búp bê ma ám Annabelle Comes Home.
      Đây là phần phim tiếp theo của vũ trụ phim kinh dị siêu nhiên The Conjuring, đồng thời là phần thứ ba nối tiếp hai
      tác phẩm trước đó về thực thể hắc ám Annabelle là Annabelle (2014) và Annabelle: Creation. Annabelle: Ác Quỷ Trở Về
      đã hé lộ những trò hù dọa gây ám ảnh của Annabelle sau khi con búp bê ma tìm lại sự tự do từ chính nơi giam giữ mình,
      đồng thời đánh thức các đồ vật ma ám khác.`
    },
    {
      name: "Spiderman: Far from home",
      score: "0.0",
      duration: "90 phút",
      releaseDate: "05/07/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/coming soon/spiderman.jpg"),
      isHovered: false,
      description: `Spider-Man: Far From Home - phần tiếp theo cho siêu phẩm “debut” của chàng Nhện là Spider-Man: Homecoming (2017)
      - bắt đầu bằng việc Peter Parker cùng nhóm bạn tận hưởng một kỳ nghỉ tuyệt vời tại Châu Âu sau chuỗi ngày học hành căng thẳng.
      Peter lúc này đã “cảm nắng” cô bạn thông minh MJ (Zendaya), nên thường có những cử chỉ vụng về và đáng yêu mỗi khi gần bên “nàng”.`
    },
    {
      name: "Fast & furious: Hobbs & Shaw",
      score: "0.0",
      duration: "90 phút",
      releaseDate: "02/08/2019",
      types: "2D",
      sub: "Phụ đề",
      age: "0",
      image: require("./../../views/images/movies/coming soon/ff.jpg"),
      isHovered: false,
      description: `Từng là những người không mấy ưa gì nhau, thậm chí xem nhau là kẻ thù không đội trời chung, hẳn Hobbs và Shaw
      đã vô cùng rất bất ngờ khi được MI6 ngỏ lời mời cộng tác cùng nhau. Nguyên nhân là do xuất hiện kẻ phản diện có biệt danh
      là Brixton (Idris Elba) đang gây rối khắp mọi nơi, chiếm đoạt một loại vũ khí sinh học và đe dọa mạng sống hàng triệu con người.`
    },
  ]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "TANG_LEN":
      return update(state, {
        count: { $set: state.count + 1 }
      });

    case "GIAM_XUONG":
      return update(state, {
        count: { $set: state.count - 1 }
      });
    default:
      return state;
  }
};