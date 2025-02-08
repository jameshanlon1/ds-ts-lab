import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => {
        friend.age += 1; // Increment age
        return `${friend.name} is now ${friend.age}`;
    });
}

// Example usage:
console.log(allOlder(friends));


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  

  function addColleague(
    colleagues: Colleague[], 
    name: string, 
    department: string, 
    email: string
  ): void {
    // Find the highest extension number
    const highestExt = colleagues.length > 0
      ? Math.max(...colleagues.map(c => c.contact.extension))
      : 100; // Default to 100 if no colleagues exist
  
    // Create a new colleague object with the passed arguments
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: highestExt + 1, // Set the extension to the highest + 1
      },
    };
  
    // Add the new colleague to the array
    colleagues.push(newColleague);
  }
  


addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));



function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  

  function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): Friend[] {
    return friends.filter(criterion);
}
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));



function addInterest(friend: Friend, interest: string): string[] {
    // If 'interests' is undefined, initialize it as an empty array
    if (!friend.interests) {
        friend.interests = [];
    }

    // Add the new interest
    friend.interests.push(interest);

    // Return the updated interests array
    return friend.interests;
}
console.log(addInterest(friends[0], 'Politics'))
