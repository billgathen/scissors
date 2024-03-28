interface Person {
  fullName: string;
  nickname: string;
  powers: string;
}

export const people: Record<string, Person> = {
  "Ben": { fullName: "Ben Grimm", nickname: "The Thing", powers: "super strength, rock-hard skin" },
  "Johnny": { fullName: "Johnny Storm", nickname: "Human Torch", powers: "flying, flames" },
  "Reed": { fullName: "Reed Richards", nickname: "Mr. Fantastic", powers: "stretchy" },
  "Sue": { fullName: "Sue Storm", nickname: "The Invisible Woman", powers: "invisibility, force fields" },
}

export const foods: Record<string, string[]> = {
  "Fruits": [ "apples", "bananas", "dates" ],
  "Vegetables": [ "carrots", "broccoli", "brussel sprouts", "kale" ],
  "Meats": [ "beef", "pork", "chicken" ]
}