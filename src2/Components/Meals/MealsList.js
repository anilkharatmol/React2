import classes from "./MealsList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

export default function MealsList() {
  const DummyMeals = [
    {
      id: Math.random().toString(),
      name: "Sushi",
      description: "finest fish and beggies",
      price: "22.99",
    },
    {
      id: Math.random().toString(),
      name: "Schnitzel",
      description: "A german speciality",
      price: "16.50",
    },
    {
      id: Math.random().toString(),
      name: "Barbeque Burger",
      description: "American,raw and meaty",
      price: "12.99",
    },
    {
      id: Math.random().toString(),
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: "15.99",
    },
  ];

  const meal = DummyMeals.map((meal) => (
    <MealItem key={meal.id} meal={meal}></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <ul>
        <Card>{meal}</Card>
      </ul>
    </section>
  );
}
