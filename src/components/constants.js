export const IMGURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
export const VIDEO_URL = "https://www.youtube.com/watch?v=";
export const ACTORSNUM = 6;
// const sqlq = MOVIES.map(movies => 
//     console.log('INSERT INTO movie VALUES('+movies.id + ', ' + movies.vote_average*10 + ', \'2018-04-25 00:00:00\', \"' + movies.overview + '\" , '+ 
//        '\'Action\'' + ', \'' + movies.poster_path + '\', \'87min\', \'Paramount\', \'' + movies.title + '\', \'test\', ' + movies.vote_average*10 + ', 1,2,14000000,1);'  )
// );

// const movieMap = MOVIES.map(movies => 
//   <Grid.Column  key={movies.title + "1"}>
//       <Container style={{opacity: 1, backgroundColor:'', color:'black'}}>
//       <Image 
//       fluid
//       src={imgUrl + movies.poster_path}
//       /> 
//       </Container>
//   </Grid.Column>
// );

const userInfoList = (userInfo, editInfo, change) => {
  const user = [
  ['Name', 'Edit Name'],
  ['Email', 'Change Email'],
  ['Password', 'Change Password']]

  return user.map(item => 
      <div>
          <Breadcrumb>
              <Breadcrumb.Section >
                  <p style={{color:'#02c7ff', marginLeft:'2em'}}>{item[0]}</p>
              </Breadcrumb.Section>
              <Breadcrumb.Divider 
                  icon={<Icon color='grey' name='right chevron' />} 
              />
              {(change == item[0])? 
                  <div>
                      <Input placeholder='Search...' />
                      <Input placeholder='Search...' />
                      <Input placeholder='Search...' />
                  </div>
              :
              <Breadcrumb.Section link name={item[0]} onClick={editInfo}>
                  <p style={{color:'white'}}>{item[1]}</p>
              </Breadcrumb.Section>
              }
          </Breadcrumb>
      </div>
  );
}

export const MOVIES = [
    {"vote_count": 1, 
      "id": 705, 
      "video": [{"id": "533ec656c3a3685448000566", 
      "iso_639_1": "en", 
      "iso_3166_1": "US", 
      "key": "eVfGcUNJ5xs", 
      "name": "Critics' Pick", 
      "site": "YouTube", 
      "size": 480, 
      "type": "Featurette"}, 
      {"id": "579656b59251416bfc00040b", 
      "iso_639_1": "en", 
      "iso_3166_1": "US", 
      "key": "LSntQerk8cQ", 
      "name": "Trailer 1", 
      "site": "YouTube", 
      "size": 360, 
      "type": "Trailer"}, 
      {"id": "5537a4df92514140b1000ace", 
      "iso_639_1": "en", 
      "iso_3166_1": "US", 
      "key": "rqxgoPvFiuk", 
      "name": "Kristin Scott Thomas on All About Eve", 
      "site": "YouTube", 
      "size": 1080, 
      "type": "Featurette"}], 
      "vote_average": 8, 
      "title": "All About Eve", 
      "popularity": 12.656863, 
      "poster_path": "/6numIZH6uR3NlJgY9m7nGH0jhs.jpg", 
      "original_language": "en", 
      "original_title": "All About Eve", 
      "genre_ids": [18], 
      "backdrop_path": "/dlVEqWvGVie7iZax0MW2zjqIJq0.jpg", 
      "adult": false, 
      "overview": "From the moment she glimpses her idol at the stage door, Eve Harrington is determined to take the reins of power away from the great actress Margo Channing. Eve maneuvers her way into Margo's Broadway role, becomes a sensation and even causes turmoil in the lives of Margo's director boyfriend, her playwright and his wife. Only the cynical drama critic sees through Eve, admiring her audacity and perfect pattern of deceit.",
       "release_date": "1950-11-09"}, 
    {"vote_count": 2, 
      "id": 599, 
      "video": [{"id": "533ec655c3a368544800046b", "iso_639_1": "en", "iso_3166_1": "US", "key": "klM1GSJsblQ", "name": "Critics' Pick", "site": "YouTube", "size": 480, "type": "Featurette"}, {"id": "533ec655c3a368544800046c", "iso_639_1": "en", "iso_3166_1": "US", "key": "BGjBjMWodXo", "name": "Writer Robert Towne On Billy Wilder's Sunset Blvd.", "site": "YouTube", "size": 480, "type": "Featurette"}, {"id": "533ec655c3a368544800046d", "iso_639_1": "en", "iso_3166_1": "US", "key": "l6wpYQ00ycU", "name": "Trailers From Hell", "site": "YouTube", "size": 720, "type": "Featurette"}, {"id": "58499185c3a368141a01572b", "iso_639_1": "en", "iso_3166_1": "US", "key": "USv1hJTlbhg", "name": "Trailer", "site": "YouTube", "size": 1080, "type": "Trailer"}], 
      "vote_average": 8.2, 
      "title": "Sunset Boulevard", 
      "popularity": 8.636608, 
      "poster_path": "/oFwzvRgfxJc0FUr2mwYTi10dk3G.jpg", 
      "original_language": "en", 
      "original_title": "Sunset Boulevard", 
      "genre_ids": [18], 
      "backdrop_path": "/49OTCCPYlARRe2JS1PAhPJmFkIW.jpg", 
      "adult": false, 
      "overview": "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity.", 
      "release_date": "1950-08-10"}, 
    {"vote_count": 3, 
      "id": 770, 
      "video": [{"id": "533ec656c3a36854480005ae", "iso_639_1": "en", "iso_3166_1": "US", "key": "3AaSdZvetuY", "name": "Martin Scorsese On Gone With The Wind", "site": "YouTube", "size": 480, "type": "Featurette"}, {"id": "533ec656c3a36854480005af", "iso_639_1": "en", "iso_3166_1": "US", "key": "0dTsfsr6-X8", "name": "Trailer 2", "site": "YouTube", "size": 720, "type": "Trailer"}, {"id": "533ec656c3a36854480005b0", "iso_639_1": "en", "iso_3166_1": "US", "key": "fsVQhN4nyxw", "name": "Trailer 3", "site": "YouTube", "size": 480, "type": "Trailer"}, {"id": "5871130bc3a3684f0a008c1f", "iso_639_1": "en", "iso_3166_1": "US", "key": "fJhad-s3TYs", "name": "Trailer", "site": "YouTube", "size": 480, "type": "Trailer"}, {"id": "593e36e99251416945015a56", "iso_639_1": "en", "iso_3166_1": "US", "key": "tGGEF42hKb4", "name": "Gone with the Wind 1939 Trailer", "site": "YouTube", "size": 720, "type": "Trailer"}], 
      "vote_average": 7.7,
      "title": "Gone with the Wind", 
      "popularity": 28.188324, 
      "poster_path": "/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg", 
      "original_language": "en", 
      "original_title": "Gone with the Wind", 
      "genre_ids": [18, 10749, 10752], 
      "backdrop_path": "/bGRUMgSvs6wzYQRqehY4Fsup4f1.jpg", 
      "adult": false, 
      "overview": "An American classic in which a manipulative woman and a roguish man carry on a turbulent love affair in the American south during the Civil War and Reconstruction.", 
      "release_date": "1939-12-15"}, 
    {"vote_count": 4,"id": 11787, "video": [{"id": "533ec670c3a36854480020a2", "iso_639_1": "en", "iso_3166_1": "US", "key": "VvfXvW2wsuQ", "name": "Trailer 1", "site": "YouTube", "size": 360, "type": "Trailer"}, {"id": "533ec670c3a36854480020a3", "iso_639_1": "en", "iso_3166_1": "US", "key": "nDlJVI3AMdg", "name": "Trailers From Hell", "site": "YouTube", "size": 720, "type": "Featurette"}, {"id": "58b7a355c3a368352e0012de", "iso_639_1": "en", "iso_3166_1": "US", "key": "0iEwoJj3X58", "name": "Trailer", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 7.7, "title": "Harvey", "popularity": 6.979388, "poster_path": "/1w1rphQjNFIkGw0mxsBxe2N924C.jpg", "original_language": "en", "original_title": "Harvey", "genre_ids": [35, 18], "backdrop_path": "/jhyTTVO9cId0lgd2IFA0Bj1uzZ6.jpg", "adult": false, "overview": "The classic stage hit gets the Hollywood treatment in the story of Elwood P. Dowd who makes friends with a spirit taking the form of a human-sized rabbit named Harvey that only he sees (and a few privileged others on occasion also.) After his sister tries to commit him to a mental institution, a comedy of errors ensues. Elwood and Harvey become the catalysts for a family mending its wounds and for romance blossoming in unexpected places.", "release_date": "1950-10-13"}, 
    {"vote_count": 5, "id": 37468, "video": [{"id": "54413cc0c3a36860ef001b37", "iso_639_1": "en", "iso_3166_1": "US", "key": "eJLi5G1RhrU", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 6.5, "title": "The Big Lift", "popularity": 1.982611, "poster_path": "/lQ7MOU0ZXXCMlVLeut1zd7bIOts.jpg", "original_language": "en", "original_title": "The Big Lift", "genre_ids": [10752, 28, 12, 18], "backdrop_path": "/8GjWIEmwhcA4TWxqRR3Mcn0sspP.jpg", "adult": false, "overview": "The Berlin Air Lift from the point of view of two NCOs.", "release_date": "1950-04-26"}, 
    {"vote_count": 6, "id": 11007, "video": [{"id": "533ec66dc3a3685448001d82", "iso_639_1": "en", "iso_3166_1": "US", "key": "60A-N05Du6s", "name": "Cheaper By The Dozen", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 6, "title": "Cheaper by the Dozen", "popularity": 9.281237, "poster_path": "/qdbC2M1WCY310tmbraIoxbd32TT.jpg", "original_language": "en", "original_title": "Cheaper by the Dozen", "genre_ids": [35], "backdrop_path": "/yy97aQyggq23BFFIpddAekgcFpe.jpg", "adult": false, "overview": "The Baker brood moves to Chicago after patriarch Tom gets a job coaching football at Northwestern University, forcing his writer wife, Mary, and the couple's 12 children to make a major adjustment. The transition works well until work demands pull the parents away from home, leaving the kids bored -- and increasingly mischievous.", "release_date": "2003-12-24"}, 
    {"vote_count": 7, "id": 150689, "video": [{"id": "571c0b43925141085e000f0d", "iso_639_1": "en", "iso_3166_1": "US", "key": "20DF6U1HcGQ", "name": "Official US Trailer", "site": "YouTube", "size": 1080, "type": "Trailer"}, {"id": "571c0b7bc3a36824a30026e3", "iso_639_1": "en", "iso_3166_1": "US", "key": "erecP_j6aKE", "name": "Official US Trailer 2", "site": "YouTube", "size": 1080, "type": "Trailer"}, {"id": "571c0ba1c3a36864e00037c6", "iso_639_1": "en", "iso_3166_1": "US", "key": "_wppM8ycod0", "name": "Official Teaser Trailer", "site": "YouTube", "size": 1080, "type": "Trailer"}, {"id": "571c0bf6c3a368525f006e51", "iso_639_1": "en", "iso_3166_1": "US", "key": "sYPXeNzpDJE", "name": "Official UK Trailer", "site": "YouTube", "size": 1080, "type": "Trailer"}, {"id": "571c0c4ac3a3686524002322", "iso_639_1": "en", "iso_3166_1": "US", "key": "cVwCxYiKCO0", "name": "Official UK Trailer 2", "site": "YouTube", "size": 1080, "type": "Trailer"}, {"id": "571c0c73c3a36824a30026fa", "iso_639_1": "en", "iso_3166_1": "US", "key": "n44EWI92Tc8", "name": "Official UK Trailer 3", "site": "YouTube", "size": 1080, "type": "Trailer"}], "vote_average": 6.6, "title": "Cinderella", "popularity": 53.750607, "poster_path": "/o1F2aloaOUufHHOsV0laA9aw9N0.jpg", "original_language": "en", "original_title": "Cinderella", "genre_ids": [10749, 14, 10751, 18], "backdrop_path": "/aUYcExsGuRaw7PLGmAmXubt1dfG.jpg", "adult": false, "overview": "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.", "release_date": "2015-03-12"}, 
    {"vote_count": 8, "id": 59821, "video": [], "vote_average": 6, "title": "The Fireball", "popularity": 1.392399, "poster_path": "/oi9E6Z56Vr8rH2MBGVjFCxePrVH.jpg", "original_language": "en", "original_title": "The Fireball", "genre_ids": [18], "backdrop_path": "/kJZyqfbmCP4tyDm9awU2caMSYTp.jpg", "adult": false, "overview": "With three Hollywood legends and its slam-em-over-the-handrail, roller-speedway realism. Filmed when Roller Derby was one of TV's most watched programs, this little entertainment steamroller remains a snappy jumbo popcorn treat for today's viewers, full of fabulous star wattage.", "release_date": "1950-11-09"}, 
    {"vote_count": 9, "id": 43828, "video": [{"id": "54f0df23c3a3682e71002305", "iso_639_1": "en", "iso_3166_1": "US", "key": "jczD7aNcupk", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}, {"id": "533ec6a2c3a3685448004fe7", "iso_639_1": "en", "iso_3166_1": "US", "key": "XBBKJTCxYNQ", "name": "Trailer 2", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 7, "title": "Destry Rides Again", "popularity": 3.544025, "poster_path": "/rP8zWh3SzDWb4ZVFJilwEyMnNKJ.jpg", "original_language": "en", "original_title": "Destry Rides Again", "genre_ids": [28, 35, 37], "backdrop_path": "/rEyCXDpdjT7W0dpIqKf9UQA6F2w.jpg", "adult": false, "overview": "When a tough western town needs taming, the mild-mannered son of a hard-nosed sheriff gets the job.", "release_date": "1939-11-30"}, 
    {"vote_count": 10, "id": 94831, "video": [{"id": "57841277c3a36817910019db", "iso_639_1": "en", "iso_3166_1": "US", "key": "MEURPmj5z_s", "name": "Trailer", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 6.5, "title": "The Fuller Brush Girl", "popularity": 1.03869, "poster_path": "/lPPTTcFbjKgXPwos0UmVYruxgUQ.jpg", "original_language": "en", "original_title": "The Fuller Brush Girl", "genre_ids": [35], "backdrop_path": "/wpBB6N2Wqncd3rHtgmnJSlJwpAZ.jpg", "adult": false, "overview": "A daffy door-to-door saleswoman blunders into a murder investigation.", "release_date": "1950-09-15"}, 
    {"vote_count": 11, "id": 17057, "video": [{"id": "533ec67cc3a3685448002c6c", "iso_639_1": "en", "iso_3166_1": "US", "key": "Fu8E3LooDZo", "name": "Original Trailer", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 7.5, "title": "In a Lonely Place", "popularity": 6.381289, "poster_path": "/mR72XsO7EQu3uH8TeqPxMd9V8mW.jpg", "original_language": "en", "original_title": "In a Lonely Place", "genre_ids": [18, 9648, 53], "backdrop_path": "/8KToZKp0ptiLpdT6ChJlsiJTIPg.jpg", "adult": false, "overview": "An aspiring actress begins to suspect that her temperamental boyfriend is a murderer.", "release_date": "1950-05-17"}, 
    {"vote_count": 12, "id": 26814, "video": [], "vote_average": 5.4, "title": "Love Happy", "popularity": 2.30822, "poster_path": "/xQncYU4fKbT4hHoMWMKQHfQl0rm.jpg", "original_language": "en", "original_title": "Love Happy", "genre_ids": [35], "backdrop_path": "/deDildZTqhVXmtuBm3Zln3Q2sQT.jpg", "adult": false, "overview": "The Marx Brothers help young Broadway hopefuls when they get mixed up with gangsters due to a tin of sardines containing Romanoff diamonds.", "release_date": "1949-10-12"}, 
    {"vote_count": 13, "id": 10083, "video": [{"id": "533ec669c3a368544800195c", "iso_639_1": "en", "iso_3166_1": "US", "key": "-NaBMu3pooM", "name": "Trailer", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 6.9, "title": "No Way Out", "popularity": 10.971929, "poster_path": "/6XoG37a4U7Jum8ChYoMHq6l5NQQ.jpg", "original_language": "en", "original_title": "No Way Out", "genre_ids": [28, 18, 53], "backdrop_path": "/8UlhYT3vwoj9q2bcD8KshJqzXff.jpg", "adult": false, "overview": "Navy Lt. Tom Farrell meets a young woman, Susan Atwell , and they share a passionate fling. Farrell then finds out that his superior, Defense Secretary David Brice, is also romantically involved with Atwell. When the young woman turns up dead, Farrell is put in charge of the murder investigation. He begins to uncover shocking clues about the case, but when details of his encounter with Susan surface, he becomes a suspect as well.", "release_date": "1987-08-14"}, 
    {"vote_count": 14, "id": 32078, "video": [{"id": "533ec690c3a368544800408b", "iso_639_1": "en", "iso_3166_1": "US", "key": "Wx5NTgtz6U8", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}, {"id": "533ec690c3a368544800408c", "iso_639_1": "en", "iso_3166_1": "US", "key": "pdKXJ2D3tXk", "name": "Trailers From Hell", "site": "YouTube", "size": 720, "type": "Featurette"}], "vote_average": 7.2, "title": "Panic in the Streets", "popularity": 3.387397, "poster_path": "/xk9tqp17Fcd9IwA3q6SXPzq1yjG.jpg", "original_language": "en", "original_title": "Panic in the Streets", "genre_ids": [18, 53, 80], "backdrop_path": "/eZTestILTBCT7vLOj6j4k07trCT.jpg", "adult": false, "overview": "One night in the New Orleans slums, vicious hoodlum Blackie and his friends kill an illegal immigrant who won too much in a card game. Next morning, Dr. Clint Reed of the Public Health Service confirms the dead man had pneumonic plague. To prevent a catastrophic epidemic, Clint must find and inoculate the killers and their associates, with the reluctant aid of police captain Tom Warren, despite official skepticism, and in total secrecy, lest panic empty the city. Can a doctor turn detective? He has 48 hours to try...", "release_date": "1950-06-12"}, 
    {"vote_count": 15, "id": 61936, "video": [{"id": "533ec6b8c3a368544800645e", "iso_639_1": "en", "iso_3166_1": "US", "key": "4qdJeZi9CxQ", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 0, "title": "The Reformer and the Redhead", "popularity": 1.005323, "poster_path": "/cbMGWsqR8dM3XJj4GdDb85OMpJd.jpg", "original_language": "en", "original_title": "The Reformer and the Redhead", "genre_ids": [35, 10749], "backdrop_path": "/nkPFqxyenGXtd21O9EiNGgG6zuu.jpg", "adult": false, "overview": "A small-town politician falls for an idealistic zookeeper.", "release_date": "1950-05-05"}, 
    {"vote_count": 16, "id": 178607, "video": [{"id": "533ec706c3a368544800a40a", "iso_639_1": "en", "iso_3166_1": "US", "key": "_oWsnnKO7QU", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 0, "title": "Right Cross", "popularity": 1.575083, "poster_path": "/7G43MXwJCiJFJ5MtJYlfQs4MHty.jpg", "original_language": "en", "original_title": "Right Cross", "genre_ids": [18], "backdrop_path": "/5dxv7lZgxOVzXE6WOyVRpSowcMc.jpg", "adult": false, "overview": "A sportswriter (Dick Powell) forms a ring triangle with a fight manager's daughter (June Allyson) and her Mexican-American boxer (Ricardo Montalban).", "release_date": "1950-10-06"}, 
    {"vote_count": 17, "id": 90497, "video": [], "vote_average": 5.9, "title": "Tea for Two Hundred", "popularity": 1.983528, "poster_path": "/xDmtFbTy0XA2UX7Zeq0zBlNwX0g.jpg", "original_language": "en", "original_title": "Tea for Two Hundred", "genre_ids": [16, 35, 10751], "backdrop_path": "/tLCcOxMhz3eqEymZuzmwzFauh4d.jpg", "adult": false, "overview": "Donald is preparing a little picnic when he sees some ants passing by. He decides to tease one, ultimately by piling lots of food onto it. The ant eventually stumbles, but realizes Donald is sitting on a veritable gold mine. He rallies his fellow ants, and while Donald is napping, they cart him to a cliff and drop him into the river. When he returns to the raid in progress, he finds himself powerless to stop it. He dynamites the ant hill, but that only separates the ledge he's standing on, and he finds himself in the river again as the ants finish off a cupcake.", "release_date": "1948-12-24"}, 
    {"vote_count": 18, "id": 96255, "video": [], "vote_average": 6.5, "title": "Three Came Home", "popularity": 1.655454, "poster_path": "/yLeLbBa1JRIwhL2Iz3nBQRxP3IS.jpg", "original_language": "en", "original_title": "Three Came Home", "genre_ids": [10752, 18], "backdrop_path": "/vWa2HeXvnlZrKdgHSZ6XoKEBytp.jpg", "adult": false, "overview": "The true story of Agnes Newton Keith's imprisonment in several Japanese prisoner-of-war camps from 1941 to the end of WWII. Separated from her husband and with a young son to care for she has many difficulties to face.", "release_date": "1950-02-20"}, 
    {"vote_count": 19, "id": 136772, "video": [], "vote_average": 6, "title": "A Ticket to Tomahawk", "popularity": 1.520763, "poster_path": "/29Xeik06BMhdGQvFifo1kp7dqBj.jpg", "original_language": "en", "original_title": "A Ticket to Tomahawk", "genre_ids": [35, 10402, 37], "backdrop_path": "/1ZET09kqyiDRk83nwo7Z2G5FF8w.jpg", "adult": false, "overview": "Comedy western about a cowboy who is hired by a stagecoach boss to stop the railroad reaching his territory and putting him out of business. He uses everything from Indians to dance hall girls to try to thwart the plan. But the railroad workers, led by a female sharpshooter and an ambitious salesman, prove tough customers. Featuring a brief early appearance by Marilyn Monroe.", "release_date": "1950-05-19"}, 
    {"vote_count": 20, "id": 83191, "video": [{"id": "533ec6cfc3a36854480077bf", "iso_639_1": "en", "iso_3166_1": "US", "key": "yyZy-Ad78fk", "name": "Trailer", "site": "YouTube", "size": 720, "type": "Trailer"}], "vote_average": 5.9, "title": "Treasure Island", "popularity": 5.604742, "poster_path": "/mXmlQYEpkg7iyYnceaXX0IwNOBb.jpg", "original_language": "en", "original_title": "Treasure Island", "genre_ids": [12, 10770], "backdrop_path": "/3fDuTV1XLkfef44JuN0Php0lv6b.jpg", "adult": false, "overview": "Treasure Island is a two-part British television miniseries adaptation of the novel Treasure Island by Robert Louis Stevenson. It was made by BSkyB and first shown in the United Kingdom on Sky1 on 1\u20132 January 2012. The screenplay was by Stewart Harcourt and it was produced by Laurie Borg and directed by Steve Barron.", "release_date": "2012-01-01"}, 
    {"vote_count": 21, "id": 34623, "video": [{"id": "533ec693c3a36854480042fb", "iso_639_1": "en", "iso_3166_1": "US", "key": "QXBO4nTNm8Y", "name": "Trailer 1", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 5.2, "title": "Young Man with a Horn", "popularity": 2.269419, "poster_path": "/qZVkmslAoZOatqzil690UjsrwuO.jpg", "original_language": "en", "original_title": "Young Man with a Horn", "genre_ids": [18, 10402, 10749], "backdrop_path": "/oy0S0KZydBfcYBeqCpjMwyV6rHJ.jpg", "adult": false, "overview": "Aimless youth Rick Martin learns he has a gift for music and falls in love with the trumpet. Legendary trumpeter Art Hazzard takes Rick under his wing and teaches him all he knows about playing. To the exclusion of anything else in life, Rick becomes a star trumpeter, but his volatile personality and desire to play jazz rather than the restricted tunes of the bands he works for lands him in trouble.", "release_date": "1950-02-09"}, 
    {"vote_count": 22, "id": 2769, "video": [{"id": "533ec65cc3a3685448000ca8", "iso_639_1": "en", "iso_3166_1": "US", "key": "1XMXAleA1eQ", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 6.9, "title": "An American in Paris", "popularity": 9.678692, "poster_path": "/A71AXLqndeY4Ld7GWYyUpdCsJ6s.jpg", "original_language": "en", "original_title": "An American in Paris", "genre_ids": [18, 35, 10402, 10749], "backdrop_path": "/bX1cRtMnTIKnjkXteoB5ZtbOPOu.jpg", "adult": false, "overview": "Jerry Mulligan is an exuberant American expatriate in Paris trying to make a reputation as a painter. His friend Adam is a struggling concert pianist who's a long time associate of a famous French singer, Henri Baurel. A lonely society woman, Milo Roberts, takes Jerry under her wing and supports him, but is interested in more than his art.", "release_date": "1951-08-08"}, 
    {"vote_count": 23, "id": 25673, "video": [{"id": "533ec687c3a36854480037f8", "iso_639_1": "en", "iso_3166_1": "US", "key": "sk7a9EyMGiY", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 7, "title": "A Place in the Sun", "popularity": 7.202909, "poster_path": "/VNCkq9STUd19Y4JE6oWQFHQjI8.jpg", "original_language": "en", "original_title": "A Place in the Sun", "genre_ids": [18, 10749], "backdrop_path": "/8QPhicQEUxTGAa3L9ZqLEKkT1lf.jpg", "adult": false, "overview": "An ambitious young man wins an heiress's heart but has to cope with his former girlfriend's pregnancy.", "release_date": "1951-06-12"}, 
    {"vote_count": 24, "id": 11620, "video": [{"id": "533ec670c3a3685448002018", "iso_639_1": "en", "iso_3166_1": "US", "key": "d89YbVtQFN0", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 7, "title": "Quo Vadis", "popularity": 7.15959, "poster_path": "/nTNT1V3YR1GdFhAMQGbvJNxPeJZ.jpg", "original_language": "en", "original_title": "Quo Vadis", "genre_ids": [18, 36, 10749], "backdrop_path": "/sVIOBiSg6mmnK3auQ5pMzlvTsJn.jpg", "adult": false, "overview": "Set against the back drop of Rome in crisis, General Marcus Vinicius returns to the city from the battle fields and falls in love with a Christian woman, Lygia. Caught in the grip of insanity, Nero's atrocities become more extreme and he burns Rome, laying the blame on the Christians. Vinicius races to save Lygia from the wrath of Nero as the empire of Rome collapses around them.", "release_date": "1951-11-08"}, 
    {"vote_count": 25, "id": 702, "video": [{"id": "533ec656c3a368544800055f", "iso_639_1": "en", "iso_3166_1": "US", "key": "ilW32IKJoM0", "name": "Trailer 2", "site": "YouTube", "size": 480, "type": "Trailer"}, {"id": "593e4462c3a3680f5902b85c", "iso_639_1": "en", "iso_3166_1": "US", "key": "I0Tdb-XCnpY", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 7.7, "title": "A Streetcar Named Desire", "popularity": 8.463854, "poster_path": "/9KCwu6dhLt1DOxaUqMacMCxlXMH.jpg", "original_language": "en", "original_title": "A Streetcar Named Desire", "genre_ids": [18], "backdrop_path": "/bn3HuWjpHH9q0mnjajc7ubJ28OE.jpg", "adult": false, "overview": "Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her.", "release_date": "1951-09-18"}, 
    {"vote_count": 26, "id": 12615, "video": [{"id": "5493f0689251411e5e000bfc", "iso_639_1": "en", "iso_3166_1": "US", "key": "zsJhonpcetk", "name": "Trailer", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 5.9, "title": "Death of a Salesman", "popularity": 3.569463, "poster_path": "/yfEMKlSHSIcoAx9jNEJoMBLRCzb.jpg", "original_language": "en", "original_title": "Death of a Salesman", "genre_ids": [18], "backdrop_path": "/t1hWOaiaPn9jAH6DyvgpyhH0tA7.jpg", "adult": false, "overview": "Salesman Willy Loman is in a crisis. He's about to lose his job, he can't pay his bills, and his sons Biff and Happy don't respect him and can't seem to live up to their potential. He wonders what went wrong and how he can make things up to his family.", "release_date": "1985-08-16"}, 
    {"vote_count": 27, "id": 12092, "video": [{"id": "59b4921192514128230069a0", "iso_639_1": "en", "iso_3166_1": "US", "key": "KLIqErnQCuw", "name": "Alice in Wonderland (1951) trailer", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 7, "title": "Alice in Wonderland", "popularity": 19.696748, "poster_path": "/6nqrMYon3UEMrTrkLvJPH5IwQZe.jpg", "original_language": "en", "original_title": "Alice in Wonderland", "genre_ids": [16, 10751, 14], "backdrop_path": "/p6frW7qR3wUbssM25BS8BlzyoKc.jpg", "adult": false, "overview": "On a golden afternoon, young Alice follows a White Rabbit, who disappears down a nearby rabbit hole. Quickly following him, she tumbles into the burrow - and enters the merry, topsy-turvy world of Wonderland! Memorable songs and whimsical escapades highlight Alice's journey, which culminates in a madcap encounter with the Queen of Hearts - and her army of playing cards!", "release_date": "1951-07-03"}, 
    {"vote_count": 28, "id": 45581, "video": [{"id": "544937a4c3a3680fb8001ea5", "iso_639_1": "en", "iso_3166_1": "US", "key": "DsQgTOBcWNY", "name": "Trailer 1", "site": "YouTube", "size": 480, "type": "Trailer"}], "vote_average": 8, "title": "As Young as You Feel", "popularity": 2.288588, "poster_path": "/4aq92rxrgIQ2eYOy2KeMV5NDVyq.jpg", "original_language": "en", "original_title": "As Young as You Feel", "genre_ids": [35], "backdrop_path": "/gvBRPdwU7f7IJKg0nh3qkzXjy2e.jpg", "adult": false, "overview": "Sixty-five-year-old John Hodges must retire from Acme Printing. He later impersonates the president of the parent company and arrives at his old plant on an inspection tour. Acme president McKinley is so nervous not even his beautiful secretary Harriet can calm him. McKinley's wife Lucille becomes infatuated with Hodges. Many further complications ensue.", "release_date": "1951-06-15"}, 
    {"vote_count": 29, "id": 83081, "video": [{"id": "56a635999251412b44002e77", "iso_639_1": "en", "iso_3166_1": "US", "key": "d61vKOHr6pI", "name": "Trailer 1", "site": "YouTube", "size": 360, "type": "Trailer"}], "vote_average": 4.6, "title": "Callaway Went Thataway", "popularity": 1.338678, "poster_path": "/er9gUIURSlI7UrysbRvFIbaF8ya.jpg", "original_language": "en", "original_title": "Callaway Went Thataway", "genre_ids": [35, 37], "backdrop_path": "/9FDp7EvPK4TWv7exG2shClkqCrE.jpg", "adult": false, "overview": "Two smart marketing people resurrect some old films starring cowboy Smoky Callaway and put them on television. The films are a big hit and the star is in demand. Unfortunately no one can find him. When a lookalike sends in a photo, the marketing team hires him to impersonate Callaway. Things get sticky when the real Callaway eventually shows up.", "release_date": "1951-11-15"}
];



// const allMovies = MOVIES.map((MOVIES, i) =>
//   <img src={imgUrl + MOVIES.poster_path} height="33%" width="33.3%" />
// );
