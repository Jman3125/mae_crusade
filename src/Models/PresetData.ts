import cowboyFront from '../assets/cowboy-shirt-front.png';
import cowboyBack from '../assets/cowboy-shirt-back.png';
import poster1 from '../assets/poster1.png';
import poster2 from '../assets/poster2.png';
import maecomicShirt from '../assets/maecomics-shirt.png';

// Define the Preset type
type Preset = {
    id: string;
    title: string;
    description: string;
    price: number;
    item1: string;
    item2: string;
    hasBack: boolean;
    showSize: boolean; // Property for size selection
}

// Define the PresetData class
// This class will manage the preset data for shirts
export class PresetData {
    // Static array to hold preset data
    // This is a simple in-memory storage for presets
    private static presets: Preset[] = [
        {
            id: "item-1",
            title: "The Cowboy's Crusade Tee",
            description: "The Cowboy's Crusade Tee. Two sided featuring The Cowboy's Crusade themed designs.",
            price: 22,
            item1: cowboyFront,
            item2: cowboyBack,
            hasBack: true,
            showSize: true, // This shirt has size options
        },
        {
            id: "item-2",
            title: "Cowboy's Crusade Poster",
            description: 'White Border Cowboy\'s Crusade Cover Art Poster. Size: 12"x18"',
            price: 18,
            item1: poster2,
            item2: poster1,
            hasBack: true, 
            showSize: false, // This shirt has size options not needed on posters
        },
        {
            id: "item-3",
            title: "MAE Comics Tee",
            description: "MAE Comics front T-shirt featuring 4 different images and MAE Comics Logo.",
            price: 15.50,
            item1: maecomicShirt,
            item2: "", // No back image for this shirt
            hasBack: false,
            showSize: true, // This shirt has size options
        }

    ];


    // Static methods to access preset data
    // These methods allow other parts of the application to retrieve preset data without needing to instantiate the class
     static getAllPresets(): Preset[] {
        return this.presets;
    }
    // Method to get a preset by its ID
    // This method allows retrieval of a specific preset based on its ID
    static getPresetById(id: string): Preset | undefined {
        return this.presets.find((preset) => preset.id === id);
    }

}