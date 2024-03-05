interface Person {
  fullName: string;
  nickname: string;
  powers: string;
}

export const data: { people: { [key: string]: Person } } = {
  people: {
    "Ben": { fullName: "Ben Grimm", nickname: "The Thing", powers: "super strength, rock-hard skin" },
    "Johnny": { fullName: "Johnny Storm", nickname: "Human Torch", powers: "flying, flames" },
    "Reed": { fullName: "Reed Richards", nickname: "Mr. Fantastic", powers: "stretchy" },
    "Sue": { fullName: "Sue Storm", nickname: "The Invisible Woman", powers: "invisibility, force fields" },
  }
};
