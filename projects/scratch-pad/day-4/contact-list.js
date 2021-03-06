// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
let contact = {"id": id, "nameFirst" : nameFirst, "nameLast" : nameLast 
}; //created a contact object that takes in the makeContact parameters
return contact; //returns contact
}

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //this is our container for our contacts
    
    return {
        // we implemented the length api for you //
        length: function() { //this returns the contacts.length
            return contacts.length;
        },
        addContact: function(contact) { //push the contact into contacts to add it
            contacts.push(contact);
        },
        findContact: function(fullName) { //loops over the contacts to determine if the fullName is in it, if so it returns the contact
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                    return contacts[i];
                }
                else {
                    return undefined; //undefined is returned otherwise
                }
            }
        },
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i] === contact) { //if contact is equal to contacts[i] then it is removed using splice
                    contacts.splice(contacts[i], 1);
                }
                else {
                    return undefined; //undefined is returned otherwise
                }
            }
        },
        printAllContactNames: function() {
            var stringOfContacts = ""; //create a container for strings
            for (var i = 0; i <= contacts.length - 1; i++) { //loops over contacts and sets our new string var = to contacts first name and last name with a line break
                stringOfContacts = stringOfContacts += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"; 
            }
            stringOfContacts = stringOfContacts.substring(0, stringOfContacts.length - 1); //removed the line break
            return stringOfContacts; //returned the string of contacts
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
