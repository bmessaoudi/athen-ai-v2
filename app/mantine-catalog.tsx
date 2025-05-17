"use client";

import { useState } from "react";
import {
  AppShell,
  Button,
  Card,
  Checkbox,
  ColorPicker,
  NavLink,
  Drawer,
  ActionIcon,
  Accordion,
  Alert,
  Avatar,
  Badge,
  Blockquote,
  Breadcrumbs,
  Burger,
  Center,
  Chip,
  Code,
  Collapse,
  ColorSwatch,
  Container,
  Divider,
  FileButton,
  Flex,
  Grid,
  Group,
  Highlight,
  Image,
  Indicator,
  Kbd,
  Loader,
  Mark,
  Menu,
  Modal,
  MultiSelect,
  Notification,
  NumberInput,
  Pagination,
  Paper,
  Popover,
  Progress,
  Radio,
  Rating,
  RingProgress,
  ScrollArea,
  Select,
  Skeleton,
  Slider,
  Space,
  Spoiler,
  Stack,
  Stepper,
  Switch,
  Table,
  Tabs,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Timeline,
  Title,
  Tooltip,
  rem,
  Box,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";

export default function MantineCatalog() {
  const [opened, setOpened] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>("pulsanti");
  const theme = useMantineTheme();

  const getComponentDemo = (component: string) => {
    switch (component) {
      case "pulsanti":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Pulsanti
            </Title>
            <Group>
              <Button>Default</Button>
              <Button variant="filled">Filled</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="light">Light</Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="transparent">Transparent</Button>
              <Button variant="gradient">Gradient</Button>
            </Group>
            <Space h="md" />
            <Group>
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button size="md">MD</Button>
              <Button size="lg">LG</Button>
              <Button size="xl">XL</Button>
              <Button size="compact-xs">Compact XS</Button>
            </Group>
          </Card>
        );
      case "form":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Form Controls
            </Title>
            <Stack>
              <TextInput label="TextInput" placeholder="Inserisci testo" />
              <Textarea label="Textarea" placeholder="Inserisci testo lungo" />
              <NumberInput label="NumberInput" placeholder="Inserisci numero" />
              <Select
                label="Select"
                placeholder="Seleziona un'opzione"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
              <MultiSelect
                label="MultiSelect"
                placeholder="Seleziona più opzioni"
                data={["React", "Angular", "Vue", "Svelte"]}
              />
              <Checkbox label="Checkbox" />
              <Radio.Group name="radio" label="Radio Group">
                <Group mt="xs">
                  <Radio value="react" label="React" />
                  <Radio value="vue" label="Vue" />
                </Group>
              </Radio.Group>
              <Switch label="Switch" />
              <Slider
                label="Slider"
                marks={[
                  { value: 20, label: "20%" },
                  { value: 50, label: "50%" },
                  { value: 80, label: "80%" },
                ]}
              />
              <ColorPicker format="rgba" />
            </Stack>
          </Card>
        );
      case "feedback":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Componenti di Feedback
            </Title>
            <Stack>
              <Alert title="Alert" color="blue">
                Questo è un alert informativo
              </Alert>
              <Notification title="Notification" withCloseButton={false}>
                Questo è un messaggio di notifica
              </Notification>
              <Progress value={60} radius="xl" size="xl" />
              <Loader />
              <RingProgress
                sections={[
                  { value: 40, color: "cyan" },
                  { value: 15, color: "orange" },
                  { value: 15, color: "grape" },
                ]}
                label={<Text ta="center">Label</Text>}
              />
            </Stack>
          </Card>
        );
      case "navigazione":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Navigazione
            </Title>
            <Stack>
              <Breadcrumbs>
                {["Home", "Documenti", "File"].map((item) => (
                  <Text key={item}>{item}</Text>
                ))}
              </Breadcrumbs>
              <Tabs defaultValue="gallery">
                <Tabs.List>
                  <Tabs.Tab value="gallery">Galleria</Tabs.Tab>
                  <Tabs.Tab value="messages">Messaggi</Tabs.Tab>
                  <Tabs.Tab value="settings">Impostazioni</Tabs.Tab>
                </Tabs.List>
              </Tabs>
              <Pagination total={10} />
              <Box style={{ maxWidth: 300 }}>
                <NavLink label="Dashboard" />
                <NavLink label="Profilo" />
              </Box>
            </Stack>
          </Card>
        );
      case "layout":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Layout
            </Title>
            <Stack>
              <Container bg="gray.1" p="md">
                Container
              </Container>
              <Group>
                <Box w={100} h={50} bg="blue.5">
                  Box
                </Box>
                <Box w={100} h={50} bg="red.5">
                  Box
                </Box>
              </Group>
              <Flex gap="md">
                <Box w={100} h={50} bg="green.5">
                  Flex
                </Box>
                <Box w={100} h={50} bg="orange.5">
                  Flex
                </Box>
              </Flex>
              <SimpleGrid cols={3}>
                <Box bg="blue.1" p="md">
                  1
                </Box>
                <Box bg="blue.1" p="md">
                  2
                </Box>
                <Box bg="blue.1" p="md">
                  3
                </Box>
              </SimpleGrid>
              <Grid>
                <Grid.Col span={6}>
                  <Box bg="teal.1" p="md">
                    Col 6
                  </Box>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Box bg="teal.1" p="md">
                    Col 6
                  </Box>
                </Grid.Col>
              </Grid>
              <Center maw={400} bg="blue.1" p="md">
                Centrato
              </Center>
              <Stack gap="xs">
                <Box bg="pink.1" p="md">
                  Stack
                </Box>
                <Box bg="pink.1" p="md">
                  Stack
                </Box>
              </Stack>
            </Stack>
          </Card>
        );
      case "visualizzazione":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Visualizzazione dati e testo
            </Title>
            <Stack>
              <Title order={1}>Title h1</Title>
              <Title order={2}>Title h2</Title>
              <Title order={3}>Title h3</Title>
              <Text>Testo normale</Text>
              <Text fw={700}>Testo in grassetto</Text>
              <Text fs="italic">Testo in corsivo</Text>
              <Text td="underline">Testo sottolineato</Text>
              <Mark>Testo evidenziato</Mark>
              <Highlight highlight={["testo", "evidenziato"]}>
                Questo è un testo con parole evidenziate
              </Highlight>
              <Kbd>Ctrl + K</Kbd>
              <Code>console.log('Hello')</Code>
              <Blockquote cite="– Autore">
                Questa è una citazione molto importante
              </Blockquote>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Nome</Table.Th>
                    <Table.Th>Età</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>Mario</Table.Td>
                    <Table.Td>25</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>Luigi</Table.Td>
                    <Table.Td>30</Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </Stack>
          </Card>
        );
      case "overlay":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Overlay e Popover
            </Title>
            <Group>
              <Button onClick={() => setOpened(true)}>Apri Modal</Button>
              <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Button>Popover</Button>
                </Popover.Target>
                <Popover.Dropdown>
                  <Text size="sm">Questo è il contenuto del popover</Text>
                </Popover.Dropdown>
              </Popover>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button>Menu</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Profilo</Menu.Item>
                  <Menu.Item>Impostazioni</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color="red">Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Tooltip label="Tooltip">
                <Button variant="outline">Hover</Button>
              </Tooltip>
            </Group>
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Modal"
            >
              <Text>Contenuto del modal</Text>
            </Modal>
          </Card>
        );
      case "elementi":
        return (
          <Card withBorder p="xl">
            <Title order={3} mb="md">
              Altri elementi
            </Title>
            <Stack>
              <Group>
                <Avatar color="cyan" radius="xl">
                  MK
                </Avatar>
                <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                <Badge>Badge</Badge>
                <Chip defaultChecked>Chip</Chip>
                <ThemeIcon color="teal" size="lg" radius="xl">
                  I
                </ThemeIcon>
              </Group>
              <Divider my="sm" />
              <Accordion defaultValue="info">
                <Accordion.Item value="info">
                  <Accordion.Control>Informazioni</Accordion.Control>
                  <Accordion.Panel>
                    Questo è il contenuto del pannello informazioni.
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="faq">
                  <Accordion.Control>FAQ</Accordion.Control>
                  <Accordion.Panel>
                    Qui trovi le domande frequenti.
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Timeline active={1} bulletSize={24} lineWidth={2}>
                <Timeline.Item title="Fase 1">
                  <Text size="sm">Creazione account</Text>
                </Timeline.Item>
                <Timeline.Item title="Fase 2">
                  <Text size="sm">Verifica email</Text>
                </Timeline.Item>
                <Timeline.Item title="Fase 3">
                  <Text size="sm">Configurazione profilo</Text>
                </Timeline.Item>
              </Timeline>
              <Group>
                <ColorSwatch color={theme.colors.blue[6]} />
                <ColorSwatch color={theme.colors.red[6]} />
                <ColorSwatch color={theme.colors.green[6]} />
              </Group>
              <Spoiler
                maxHeight={120}
                showLabel="Mostra di più"
                hideLabel="Nascondi"
              >
                {Array(20)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i}>Riga di contenuto nascosto {i + 1}</div>
                  ))}
              </Spoiler>
              <Indicator inline processing size={16}>
                <Button>Notifiche</Button>
              </Indicator>
              <Rating defaultValue={3} />
              <Skeleton height={50} circle mb="xl" />
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} radius="xl" mt={6} />
              <Skeleton height={8} radius="xl" width="70%" mt={6} />
            </Stack>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="sm"
            size="sm"
          />
          <Title order={3}>Catalogo Componenti Mantine</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <ScrollArea>
          <Text fw={700} mb="xs">
            Categorie
          </Text>
          <NavLink
            label="Pulsanti"
            active={activeTab === "pulsanti"}
            onClick={() => setActiveTab("pulsanti")}
          />
          <NavLink
            label="Form Controls"
            active={activeTab === "form"}
            onClick={() => setActiveTab("form")}
          />
          <NavLink
            label="Feedback"
            active={activeTab === "feedback"}
            onClick={() => setActiveTab("feedback")}
          />
          <NavLink
            label="Navigazione"
            active={activeTab === "navigazione"}
            onClick={() => setActiveTab("navigazione")}
          />
          <NavLink
            label="Layout"
            active={activeTab === "layout"}
            onClick={() => setActiveTab("layout")}
          />
          <NavLink
            label="Visualizzazione dati"
            active={activeTab === "visualizzazione"}
            onClick={() => setActiveTab("visualizzazione")}
          />
          <NavLink
            label="Overlay e Popover"
            active={activeTab === "overlay"}
            onClick={() => setActiveTab("overlay")}
          />
          <NavLink
            label="Altri elementi"
            active={activeTab === "elementi"}
            onClick={() => setActiveTab("elementi")}
          />
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>{activeTab && getComponentDemo(activeTab)}</AppShell.Main>
    </AppShell>
  );
}
