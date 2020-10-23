// inspired by Rich Hickey talk "Maybe Not" on clojure specs

// As schema
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  [extension:string]:unknown;
}

// type TodoPreview = Partial<Todo> & Pick<Todo, "title" | "completed">;
type Select<T, R extends keyof T> = Partial<T> & Pick<T, R>;


// As context select
type TodoPreview = Select<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  // description : "yes",
  extra: "open",
  more : "tes",
};

console.log(todo);
