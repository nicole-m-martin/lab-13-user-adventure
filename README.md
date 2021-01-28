SPACE QUEST!

Plan so far...

1. Home
   HTML:
   Form for user data
   on submit:

   - Store the user data in the local storage
   - Redirect to the map/list page

2. Map/List

   HTML: Setup
   ul to inject quests into the page - Before anything, if all the quests are completed, redirect to the results page - otherwise, grab quest data
   Grab quest data
   loop through it
   Generate a title for each quest - If the quest has been completed, cross it out - If the quest has NOT been completed, cross it out

3. quest
   HTML: header, image, paragraph, submit button, and a list of radio buttons
   JS: Grab the id of the quest of the url - Use that id to ‘findById’ that quest in out quest data - Use the quest to populate the elements of the HTML
   On submit, - Calculate the user’s new stats (HP and Gold) - Put the new stats in local storage

4. results
   -Display some custom message
