function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line){
  if (line.length > 0){
   // line.shift();
  return `Currently serving ${line.shift()}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}
 1) deli currentLine(line) says who is in line when there are people waiting:

      Error: Expected 'The line is currently: 1. Bill' to equal 'The line is currently: 1. Bill, 2. Jane, 3. Ann'
      + expected - actual

      -The line is currently: 1. Bill
      +The line is currently: 1. Bill, 2. Jane, 3. Ann



