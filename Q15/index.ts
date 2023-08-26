let guestList: string[] = [
    "Quds",
    "Huzii",
    "Amna"
  ];
   function inviteToDinner(guests: string[]): void {
    for (let i = 0; i < guests.length; i++) {
      const guest = guests[i];
      console.log(`Dear ${guest}, you are cordially invited to dinner. `);
    }
  }
  
  inviteToDinner(guestList);
  const absent = guestList[1];
  guestList[1] = "Hadia";
  
  console.log(`Unfortunately, ${absent} can't make it to the dinner.`);
  console.log("Updated Guest List:");
  inviteToDinner(guestList);
  