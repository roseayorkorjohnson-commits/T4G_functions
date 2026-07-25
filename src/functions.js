function checkGender() {
      let gender = prompt("Please enter your gender (Male or Female):");

      // Handle user pressing "Cancel"
      if (gender === null) return;

      // Clean up whitespace and normalize case
      const cleanGender = gender.trim().toLowerCase();

      if (cleanGender === "female") {
        alert("You are a girl!👧🏽");
      } else if (cleanGender === "male") {
        alert("You are a boy! 👦🏽");
      } else {
        alert("Gender not recognized. Please enter either Male or Female.");
      }
    }