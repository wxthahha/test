public class Test {
    public static void main(String args[]){
        AnimalSound animalSound = new AnimalSound();
        Animal dock = new Dock();
        Animal chicken = new Chicken();
        animalSound.makeSound(dock);
        animalSound.makeSound(chicken);
    }
}
