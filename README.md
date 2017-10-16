# Game Design Principles

**Note:** This project is about game design principles applied to a basic game built in Phaser, and it is for investigational purpose only.

### Traditional Way to Break Up a Game
  - **Game Engine**
    * Software, created primarily by programmers
  - **Rules and mechanics**
    * Created by designers, with programmer input
  - **User interface**
    * Coordinated with programmer/artist/HCI specialist
  - **Content and challenges**
    * Created primarily by designers

### Design Decisions

  - **Players**  
    * How many players are there at a time?
    * Who or what is the player in the world?
    * Specifies a notion of **_identity_**
  - **Goals**
    * What is the player trying to achieve?
    * Defined by the game or by the player?
    * Specifies the player **_focus_**
  - **Rules**
    * How does the player effect the world?
    * How does the player learn the rules?
    * Specifies the **_boundaries_** of the game
  - **Challenges**
    * What obstacles must the player overcome?
    * Is there more than one way to overcome them?
    * Specifies the fundamental **_gameplay_**
  - **Game Modes**
    * How are the challenges put together?
    * What is the interaction context?
  - **Setting**
    * What is the nature of the game world?
    * What is the perspective (e.g. side-scroller, 3D, etc.)?
  - **Story**
    * What narrative will the player experience?
    * How is it connected to gameplay?

#### Narrative vs Ludic

  - **Narrative**
    * Games are a story medium
      * Focuses on storytelling
      * Traditional narrative structure
    * **Advantages**
      * Emotionally compelling
      * Strong artistic vision
    * **Disadvantages**
      * Author voice over player voice
      * Poorly defined mechanics
  - **Ludic**
    * Games are about mechanics
      * Focus on gameplay, rules
      * Storytelling is minimal
    * **Advantages**
      * Focus on player agency
      * Tight, well-defined gameplay
    * **Disadvantages**
      * Lack of player motivation
      * Hard to distinguish yourself

#### Game design must be a balance
  - **Motivate the player**
    * Needs a story framework
      * Setting to work within
      * Strong sense of identity
      * Challenges with context
  - **Empower the player**
    * Drama from player actions
      * Define what the player can do
      * Challenges reward or punish
      * Freedom in achieving goals

Video games are complex, interactive, multimedia software systems. These systems must, in real time, process player input, simulate the interactions of semi-autonomous objects, and generate high-fidelity graphics and audio outputs, all while trying to engage the players. Attempts at building video games can quickly be overwhelmed by the need to be well versed in software development as well as in how to create appealing player experiences. The first challenge can be alleviated with a software library, or game engine, that contains a coherent collection of utilities and objects designed specifically for developing video games. The player engagement goal is typically achieved through careful gameplay design and fine-tuning throughout the video game development process.

A game engine relieves the game developers from simple routine tasks such as decoding specific key presses on the keyboard, designing complex algorithms for common operations such as mimicking shadows in a 2D world, and understanding nuances in implementations such as enforcing accuracy tolerance of
a physics simulation. Commercial and well-established game engines such as Unity, Unreal Engine, and Panda3D present their systems through a graphical user interface (GUI). Not only does the friendly GUI simplify some of the tedious processes of game design such as creating and placing objects in a level, but more importantly, it ensures that these game engines are accessible to creative designers with diverse backgrounds who may find software development specifics distracting.

While no explicit instructions exist for making a great game, a number of elements work together in harmony to create a final experience greater than the sum of its parts, and all game designers must successfully address each of them in order to produce something worth playing. The elements include the following:

  - **Technical design:** This includes all game code and the game platform and      is generally not directly exposed to players; rather, it forms the foundation     and scaffolding for all aspects of the game experience. Technical design         issues impact the player experience in many ways (for example, the number of     times a player experiences “loading” delays during play or how many frames       per second the game displays), but the technical design is typically             invisible to players because it runs under what’s referred to as the             presentation layer, or all of the audiovisual and/or haptic feedback the         player encounters during play.

  - **Game mechanic(s):** The game mechanic is an abstract description of what we     can be referred to as the foundation of play for a given game experience.        Types of game mechanics include puzzles, dexterity challenges such as jumping     or aiming, timed events, combat encounters, and the like. The game mechanic      is a framework; specific puzzles, encounters, and game interactions are          implementations of the framework. A real-time strategy (RTS) game might          include a resource-gathering mechanic, for example, where the mechanic might     be described as “Players are required to gather specific types of resources      and combine them to build units which they can use in combat”. The specific      implementation of that mechanic (how players locate and extract the resources     in the game, how they transport them from one place to another, and the rules     for combining resources to produce units) is an aspect of system design,         level design, and the interaction model.

  - **Systems design:** The internal rules and logical relationships that provide     structured challenge to the core game mechanic are referred to as the game’s     systems design. Using the previous RTS example, a game might require players     to gather a certain amount of metal ore and combine it with a certain amount     of wood to make a game object; the specific rules for how many of each           resource is required to make the objects and the unique process for creating     the objects (for example, objects can be produced only in certain structures     on the player’s base and take x number of minutes to appear after the player     starts the process) are aspects of systems design. Casual games may have         basic systems designs. The unexpected global phenomenon Flappy Bird from         .GEARS Studio, for example, is a game with few systems and low complexity,       while major genres like RTS games may have deeply complex and interrelated       systems designs created and balanced by entire teams of designers. Game          systems designs are often where the most hidden complexity of game design        exists; as designers go through the exercise of defining all variables that      contribute to an implementation of a game mechanic, it’s easy to become lost     in a sea of complexity and balance dependencies. Systems that appear fairly      simple to players may require many components working together and balanced      perfectly against each other, and underestimating systems complexity is          perhaps one of the biggest pitfalls encountered by new (and veteran!) game       designers. Until you know what you’re getting into, always assume the systems     you create will prove to be considerably more complex than you anticipate.

  - **Level design:** A game’s level design reflects the specific ways each of       the other eight elements combine within the context of individual “chunks” of     gameplay, where players must complete a certain chunk of objectives before       continuing to the next section (some games may have only one level, while        others will have dozens). Level designs within a single game can all be          variations of the same core mechanic and systems design (game like Tetris and     Bejeweled are examples of games with many levels all focusing on the same        mechanic), while other games will mix and match mechanics and systems designs     for variety among levels. Most games feature one primary mechanic and a          game-spanning approach to systems design and will add minor variations           between levels to keep things feeling fresh (changing environments, changing     difficulty, adding time limits, increasing complexity, and the like),            although occasionally games will introduce new levels that rely on completely     separate mechanics and systems to surprise players and hold their interest.      Great level design in games is a balance between creating “chunks” of play       that showcase the mechanic and systems design and changing enough between        these chunks to keep things interesting for players as they progress through     the game (but not changing so much between chunks that the gameplay feels        disjointed and disconnected).

  - **Interaction model:** The interaction model is the combination of keys,         buttons, controller sticks, touch gestures, and so on, used to interact with     the game to accomplish tasks and the graphical user interfaces that support      those interactions within the game world. Some game theorists break the          game’s user interface (UI) design into a separate category (game UI includes     things such as menu designs, item inventories, heads-up displays [HUDs]), but     the interaction model is deeply connected to UI design, and it’s a good          practice to think of these two elements as inseparable. In the case of the       RTS game referenced earlier, the interaction model includes the actions          required to select objects in the game, to move those objects, to open menus     and manage inventories, to save progress, to initiate combat, and to queue       build tasks. The interaction model is completely independent of the mechanic     and systems design and is concerned only with the physical actions the player     must take to initiate behaviors (for example, click mouse button, press key,     move stick, scroll wheel); the UI is the audiovisual or haptic feedback          connected to those actions (onscreen buttons, menus, statuses, audio cues,       vibrations, and the like).

  - **Game setting:** Are you on an alien planet? In a fantasy world? In an          abstract environment? The game setting is a critical part of the game            experience and, in partnership with the audiovisual design, turns what would     otherwise be a disconnected set of basic interactions into an engaging           experience with context. Games settings need not be elaborated to be             effective; the game Candy Crush from King has a rather simple setting with a     thin narrative wrapper, but the combination of setting, audiovisual design,      and level design are uniquely well-matched and contribute significantly to       the millions of hours players invest in the experience each month (as of         2015).

  - **Visual design:** Video games exist in a largely visual medium, so it’s not     surprising that companies frequently spend as much or more on the visual         design of their games as they spend on the technical execution of the code.      Large games are aggregations of thousands of visual assets, including            environments, characters, objects, animations, and cinematics; even small        casual games generally ship with hundreds or thousands of individual visual      elements. Each object a player interacts with in the game must be a unique       asset, and if that asset includes more complex animation than just moving it     from one location on the screen to another or changing the scale or opacity,     the object most likely will need to be animated by an artist. Game graphics      need not be photorealistic or stylistically elaborate to be visually             excellent or to effectively represent the setting (many games intentionally      utilize a simplistic visual style), but the best games consider art direction     and visual style to be core to the player experience, and visual choices will     be intentional and well-matched to the game setting and mechanic.

  - **Audio design:** This includes music and sound effects, ambient background      sounds, and all sounds connected to player actions (select/use/swap item,        open inventory, invoke menu, and the like). Audio design functions               hand-in-hand with visual design to convey and reinforce game setting, and        many new designers significantly underestimate the impact of sound to immerse     players into game worlds. Imagine Star Wars (for example) without the music,     the light saber sound effect, Darth Vader’s breathing, or R2D2’s                 characteristic beeps; the audio effects and musical score are as fundamental     to the experience as the visuals.

  - **Meta-game:** The meta-game centers on how individual objectives come           together to propel players through the game experience (often via scoring,       unlocking individual levels in sequence, playing through a narrative, and the     like). In many modern games, the meta-game is the narrative arc or story;        players often don’t receive a “score” per se but rather reveal a linear or       semi-linear story as they progress through game levels, driving forward to       complete the story. Other games (especially social and competitive games)        involve players “leveling up” their characters, which can happen as a result     of playing through a game-spanning narrative experience or by simply             venturing into the game world and undertaking individual challenges that         grant experience points to characters. Other games, of course, continue          focusing on scoring points or winning rounds against other players.

The magic of video games typically arises from the interplay between these nine elements, and the most successful games finely balance each as part of a unified vision to ensure a harmonious experience; this balance will always be unique to each individual effort and is found in games ranging from King’s Candy Crush to Bioware’s Mass Effect. The core game mechanic in many successful games is often a variation
on one or more fairly simple, common themes (Angry Birds, for example, is a relatively basic projectile launching game), but the visual design, narrative context, audio effects, interactions, and progression system work together with the game mechanic to create a unique experience that’s considerably more engaging than the sum of its individual parts, making players want to return to it again and again. Great games range from the simple to the complex, but they all feature an elegant balance of supporting design elements.

#### Features of Game Engines
  - Power the graphics and sound
    * 3D rendering or 2D sprites
  - Power the character and strategic AI
    * Typically, custom designed for the game
  - Power the physics interactions
    * Must support collisions at a bare minimum
  - Describe the systems
    * Space the possibilies in game world
  - Bare bones engine: graphics + physics

#### Game Engines: Graphics
  - Minimum requirements:
    * Low level instructions for drawing
    * API to import artistic assets
    * Routine for manipulating images

#### Game Engines: Physics
  - Defines physical attributes of the world
    * There is gravitational force
    * Objects may have friction
    * Ways in which lights can reflect
  - Does not define precise values or effects
    * The direction of value of gravity
    * Friction constants for each object
    * Specific lighting for each material

#### Game Engines: Systems
  - Physics is an example of a game system
    * Specifies the space of possibilites for a game
    * But not the specific parameters of elements
  - Extra code that you add to the engine
    * Write functions for the possibilites
    * But do not code values or when called
  - Separates programmer from gameplay designer
    * Programmer creates the system
    * Gameplay designer fills in parameters

#### Characteristics of an Engine
  - Broad, adaptable and extensible
    * Encodes all non-mutable design decisions
    * Parameters for all mutable design decisions
  - Outlines gameplay possibilities
    * Cannot be built independent of design
    * But only needs highest level information
    * Gameplay specification is sufficient

#### Data-Driven Design
  - No code outside engine; all else is data
    * Purpose of separating system from parameters
    * Create game content with level editors
  - **Examples**
    * Art, music in industry-standard file formats
    * Object data in XML or other data file formats
    * Character behavior specified through scripts
  - Major focus for alpha release

#### Rules & Mechanics
  - Fills in the values for the system
    * Parameters (e.g. gravity, damage amounts, etc.)
    * Types of player abilities/verbs
    * Types of world interactions
    * Types of obstacles/challenges
  - But does not include specific challenges
    * Just the list of the challenges that could exist
    * Contents of the pallet for level editor

#### Game AI: Where does it go?
  - Game AI is traditionally placed in mechanics
    * Characters need rules to make right choices
    * Tailor AI to give characters personalities
  - But it is implemented by programmer
    * Complicated search algorithms
    * Algorithms should be in game engine

#### Interfaces
  - Interface specifies
    * How player does things (player-to-computer)
    * How player gets feedback (computer-to-player)
  - More than engine + mechanics
    * They just describe what the player can do
    * Do not specify how it is done
  - Bad interfaces can kill a game

#### Interface tips
  - Must consider input devices in design
    * For PC, typically mouse and keyword
    * Game controllers have different "feel"
  - Consider depth and width of interface
    * Details are best processed at the center of vision
    * Peripheral vision mostly detects motion
  - Strive for "invisible" interface (metaphorically)
    * Familiarity is better than innovation

#### Content and Challenges
  - Content is everything else
  - Gameplay content defines the actual game
    * Goals and victory conditions
    * Mission and quests
    * Interactive story choices
  - Non-gameplay content affects player experience
    * Graphics and cut scenes
    * Sound effects and background music
    * Non-interactive story

#### Why the division?
  - They are not developed sequentially
    * Content may require changes to game engine
    * Interface is changing until the very end
  - Intended to organize your design
    * **Engine:** decisions to be made early, hard-code
    * **Mechanics:** mutable design decisions
    * **Interface:** how to shape the user experience
    * **Content:** specific gameplay and level-design
