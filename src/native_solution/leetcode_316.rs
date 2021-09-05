#[allow(dead_code)]
pub fn remove_duplicate_letters(s: String) -> String {
    let mut counts: [usize; 26] = [0; 26];
    for &b in s.as_bytes() {
        counts[(b - b'a') as usize] += 1;
    }
    let mut v: Vec<char> = Vec::with_capacity(26);
    let mut exists: [bool; 26] = [false; 26];
    for &b in s.as_bytes() {
        let i = (b - b'a') as usize;
        counts[i] -= 1;
        if exists[i] {
            continue;
        }
        while let Some(&last) = v.last() {
            let j = (last as u8 - b'a') as usize;
            if b < last as u8 && counts[j] > 0 {
                exists[j] = false;
                v.pop();
            } else {
                break;
            }
        }
        v.push(b as char);
        exists[i] = true;
    }
    v.iter().collect()
}


// use std::collections::BTreeSet;
// use std::iter::FromIterator;

// fn remove_duplicate_letters_in_set(s: String, char_set: BTreeSet<char>) -> String {
//     for ch in char_set.iter() {
//         let mut char_set = char_set.clone();
//         char_set.remove(ch);
//         let s: String = (s.split_at(s.find(*ch).unwrap()).1).to_string();
//         if char_set.is_subset(&BTreeSet::from_iter(s.chars())) {
//             return format!("{}{}", ch, remove_duplicate_letters_in_set(s, char_set));
//         }
//     }
//     "".to_string() // when the char_set is empty, return the empty string
// }

// impl Solution {
//     pub fn remove_duplicate_letters(s: String) -> String {
//         remove_duplicate_letters_in_set(s.clone(), BTreeSet::from_iter(s.chars()))
//     }
// }