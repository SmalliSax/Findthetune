# Findthetune
Mobile appication for Findthetune.com

Mobile application built for Apollo Music ApS. This application was built using AngularJS and Phonegap to create a hybrid mobile application. It explores the API for Findthetune, an online music streaming platform provided to their clients. This project explores the use of the Findthetune
API located at http://www.findthetune.com/apidoc

The app is available on both GooglePlay and AppStore. It's a constant work in progress
#Api Usage
Currently using server1.findthetune.com Should only be used client-side for streaming to an audio player.
###Streaming of a track
```
http://server1.findthetune.com/stream_music_file.php?lbl=:label&alb=:album&trk=:track
```
###Searching for a track
```
http://www.findthetune.com/action/search_track_action
```
###Array of track information
```
HTTP/1.1 200 OK
[
  {
    "track_id": "117152",
    "upload_fk": "0",
    "track_num": "13",
    "label_fk": "MUM",
    "album_num": "127",
    "primary_title": "Count Me In",
    "secondary_title": "",
    "description": "1930s up tempo swing. Positive, bright, nice, smile, jazz, swing, piano solo, medium, slow, sun, mourning, happy, day, hello.",
    "keywords": [
      ""
    ],
    "keywords_internal": "Fats Waller",
    "duration": "02:14",
    "recorded": "2009",
    "performer": "",
    "instrumentation": "",
    "tempo": "",
    "bpm": "0",
    "registered_track": "",
    "serialized_composers": "a:1:{i:0;a:8:{s:9:\"upload_fk\";i:0;s:9:\"track_num\";s:2:\"13\";s:8:\"label_fk\";s:3:\"MUM\";s:9:\"album_num\";s:3:\"127\";s:8:\"composer\";s:11:\"Dee, Brian \";s:5:\"share\";i:1;s:4:\"role\";s:0:\"\";s:6:\"ipi_id\";s:0:\"\";}}",
    "wave_created": "1",
    "rating_score": "50",
    "time_score": "56",
    "published_score": "10",
    "downloaded_score": "13",
    "sort_score": "0",
    "sound_type": "0",
    "special_keywords": null,
    "created": "2009-08-08 23:52:03",
    "deleted": "0",
    "composers": [
      {
        "upload_fk": 0,
        "track_num": "13",
        "label_fk": "MUM",
        "album_num": "127",
        "composer": "Dee, Brian ",
        "share": 1,
        "role": "",
        "ipi_id": ""
      }
    ],
    "score": "73",
    "genres": null,
    "similar": "",
    "composer": "Dee, Brian ",
    "isNewest": "0"
  },
  ...
  ]
  ```
#Contact 
For more information, contact apollo@apollomusic.dk
