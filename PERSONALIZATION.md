# Personalization checklist

## Your selected design
- Interface: Spotify-inspired
- Mood: Romantic & dreamy
- Navigation: Song list + Previous/Next buttons
- Theme: Each song's accent/background colors change per track

## Replace these placeholders
Edit `script.js` and replace all seven entries in the `songs` array:
- `title`: exact song title
- `artist`: artist name
- `mood`: a short personal mood label
- `cover`: path to your cover poster
- `audio`: path to your MP3 file
- `accent`, `accent2`, `background`: colors inspired by the poster
- `letterTitle`, `message`: your personal note

## Add files
Use these exact filenames, or update the paths in `script.js`:
- `assets/covers/song-1.jpg` through `song-7.jpg`
- `assets/songs/song-1.mp3` through `song-7.mp3`

Recommended poster format: square JPG or WebP, around 1000 × 1000 px.
Recommended audio format: MP3. Use only music you have permission to publish or share.

## Test before deployment
1. Open `index.html` using VS Code Live Server.
2. Check all seven list items and Previous/Next controls.
3. Test each audio file and verify that its poster and colors match.
4. Test the layout on a phone-sized browser.
5. Deploy the whole project folder so `assets/` is uploaded too.

## Suggested color matching
Pick one strong color from each poster for `accent`, a darker companion color for `accent2`, and a deep tinted near-black for `background`. The page uses these values to theme the play button, highlights, cover glow, and background.
